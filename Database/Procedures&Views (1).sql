-- Procedure for listing books by filters like title, authors and tags
CREATE OR REPLACE FUNCTION list_books_by_filters(
    IN title_filter VARCHAR(70) DEFAULT NULL,
    authors_filter VARCHAR[] DEFAULT '{}',
    tags_filter VARCHAR[] DEFAULT '{}'
)
RETURNS TABLE (
    book_id UUID,
    age_group VARCHAR(15),
    title VARCHAR(70),
    description TEXT,
    cover_url VARCHAR(255),
    read_time INT,
    rating FLOAT,
    total_page_number INT,
    access_level VARCHAR(30),
    book_tags VARCHAR[]
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT DISTINCT
        b.id,
        ag.age_group,
        b.title,
        b.description,
        b.cover_url,
        b.read_time,
        b.rating,
        b.total_page_number,
        al.level,
        ARRAY_AGG(DISTINCT t.name) AS book_tags
    FROM
        books b
        LEFT JOIN authors_books ab ON b.id = ab.book_id
        LEFT JOIN authors a ON ab.author_id = a.id
        LEFT JOIN books_tags bt ON b.id = bt.book_id
        LEFT JOIN tags t ON bt.tag_id = t.id
        LEFT JOIN access_levels al ON b.access_level_id = al.id
        LEFT JOIN age_groups ag ON b.age_group_id = ag.id
    WHERE
        (title_filter IS NULL OR b.title ILIKE '%' || title_filter || '%')
        AND (
            authors_filter = '{}' OR
            (
                SELECT COUNT(DISTINCT a2.id)
                FROM authors_books ab2
                JOIN authors a2 ON ab2.author_id = a2.id
                WHERE
                    ab2.book_id = b.id AND
                    (
                        a2.first_name ILIKE ANY(authors_filter) OR
                        a2.last_name ILIKE ANY(authors_filter) OR
                        (a2.first_name || ' ' || a2.last_name) ILIKE ANY(authors_filter)
                    )
            ) = cardinality(authors_filter)
        )
        AND (
            tags_filter = '{}' OR
            (
                SELECT COUNT(DISTINCT t2.id)
                FROM books_tags bt2
                JOIN tags t2 ON bt2.tag_id = t2.id
                WHERE
                    bt2.book_id = b.id AND
                    t2.name = ANY(tags_filter)
            ) = cardinality(tags_filter)
        )
    GROUP BY
        b.id, ag.age_group, b.title, b.description, b.cover_url,
        b.read_time, b.rating, b.total_page_number, al.level;
END $$;

-- Procedure for listing the favourite books by user's id
CREATE OR REPLACE FUNCTION list_user_favorite_books  (
    IN id_user UUID
)
RETURNS TABLE (                                      
    book_id UUID,
    age_group VARCHAR(15),
    title VARCHAR(70),
    description TEXT,
    cover_url VARCHAR(255),
    read_time INT,
    rating FLOAT,
    total_page_number INT,
    access_level VARCHAR(30),
    book_tags VARCHAR[]
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT                                             
        b.id,
        ag.age_group,
        b.title,
        b.description,
        b.cover_url,
        b.read_time,
        b.rating,
        b.total_page_number,
        al.level,
        ARRAY_AGG(DISTINCT t.name) AS book_tags
    FROM
        books b                                               
        JOIN users_books_favourites ufb ON b.id = ufb.book_id
        LEFT JOIN access_levels al ON b.access_level_id = al.id
        LEFT JOIN age_groups ag ON b.age_group_id = ag.id
        LEFT JOIN books_tags bt ON b.id = bt.book_id
        LEFT JOIN tags t ON bt.tag_id = t.id
    WHERE
        ufb.user_id = id_user
    GROUP BY
        b.id,
        ag.age_group,
        b.title,
        b.description,
        b.cover_url,
        b.read_time,
        b.rating,
        b.total_page_number,
        al.level;
END $$;

-- Procedure for count the favourite books user's id
CREATE OR REPLACE FUNCTION count_user_favorite_books(
    IN id_user UUID,                
    OUT favorites_books_count INT      
)
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT COUNT(*) INTO favorites_books_count
    FROM users_books_favourites ubr
    WHERE ubr.user_id = id_user;
END $$;

-- Procedure for listing the books to read later by user's id
CREATE OR REPLACE FUNCTION list_user_books_to_read (
    IN id_user UUID
)
RETURNS TABLE (
    book_id UUID,
    age_group VARCHAR(15),
    title VARCHAR(70),
    description TEXT,
    cover_url VARCHAR(255),
    read_time INT,
    rating FLOAT,
    total_page_number INT,
    access_level VARCHAR(30),
    book_tags VARCHAR[]
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        b.id AS book_id,
        ag.age_group,
        b.title,
        b.description,
        b.cover_url,
        b.read_time,
        b.rating,
        b.total_page_number,
        al.level,
        ARRAY_AGG(DISTINCT t.name) AS book_tags
    FROM
        books b
        JOIN users_books_to_read urlb ON b.id = urlb.book_id
        LEFT JOIN access_levels al ON b.access_level_id = al.id
        LEFT JOIN age_groups ag ON b.age_group_id = ag.id
        LEFT JOIN books_tags bt ON b.id = bt.book_id
        LEFT JOIN tags t ON bt.tag_id = t.id
    WHERE
        urlb.user_id = id_user
    GROUP BY
        b.id,
        ag.age_group,
        b.title,
        b.description,
        b.cover_url,
        b.read_time,
        b.rating,
        b.total_page_number,
        al.level;
END $$;

-- Procedure for count the books to read later by user's id
CREATE OR REPLACE FUNCTION count_user_books_to_read(
    IN id_user UUID,                    --
    OUT to_read_books_count INT    
)
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT COUNT(*) INTO to_read_books_count
    FROM users_books_to_read ubtr
    WHERE ubtr.user_id = id_user;
END $$;

-- Procedure for listing the completed books by user's id
CREATE OR REPLACE FUNCTION list_user_completed_books (
    IN id_user UUID
)
RETURNS TABLE (
    book_id UUID,
    age_group VARCHAR(15),
    title VARCHAR(70),
    description TEXT,
    cover_url VARCHAR(255),
    read_time INT,
    rating FLOAT,
    total_page_number INT,
    access_level VARCHAR(30),
    book_tags VARCHAR[]
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        b.id AS book_id,
        ag.age_group,
        b.title,
        b.description,
        b.cover_url,
        b.read_time,
        b.rating,
        b.total_page_number,
        al.level,
        ARRAY_AGG(DISTINCT t.name) AS book_tags
    FROM
        books b
        JOIN users_books_read bur ON b.id = bur.book_id
        LEFT JOIN access_levels al ON b.access_level_id = al.id
        LEFT JOIN age_groups ag ON b.age_group_id = ag.id
        LEFT JOIN books_tags bt ON b.id = bt.book_id
        LEFT JOIN tags t ON bt.tag_id = t.id
    WHERE
        bur.user_id = id_user
        AND bur.progress = 100
    GROUP BY
        b.id,
        ag.age_group,
        b.title,
        b.description,
        b.cover_url,
        b.read_time,
        b.rating,
        b.total_page_number,
        al.level;
END $$;

-- Procedure for count the completed books by user's id
CREATE OR REPLACE FUNCTION count_user_completed_books(
    IN id_user UUID,                    --
    OUT completed_books_count INT    
)
LANGUAGE plpgsql
AS $$
BEGIN
    SELECT COUNT(*) INTO completed_books_count
    FROM users_books_read bur
    WHERE bur.user_id = id_user AND bur.progress = 100.0;
END $$;

-- Procedure for listing activities by book's id
CREATE OR REPLACE FUNCTION list_activities_by_book_id(
    IN idd UUID
)
RETURNS TABLE (
    activity_id UUID,
    activity_title VARCHAR(70),
    activity_description TEXT
)
LANGUAGE plpgsql
AS $$
BEGIN
    RETURN QUERY
    SELECT
        a.id,
        a.title,
        a.description
    FROM
        activities a
        JOIN books b ON a.book_id = b.id
    WHERE
        b.id = idd;
END $$;

-- View for listing the popular books in last 3 months
CREATE OR REPLACE VIEW list_popular_books AS
SELECT
    b.id,
    ag.age_group,
    b.title,
    b.description,
    b.cover_url,
    b.read_time,
    b.rating,
    b.total_page_number,
    al.level,
    COUNT(ubr.user_id) AS num_readers,
    ARRAY_AGG(DISTINCT t.name) AS book_tags
FROM
    books b
    LEFT JOIN users_books_read ubr ON b.id = ubr.book_id
    LEFT JOIN access_levels al ON b.access_level_id = al.id
    LEFT JOIN age_groups ag ON b.age_group_id = ag.id
    LEFT JOIN books_tags bt ON b.id = bt.book_id
    LEFT JOIN tags t ON bt.tag_id = t.id
WHERE
    ubr.read_date >= NOW() - INTERVAL '3 months'
GROUP BY
    b.id,
    ag.age_group,
    b.title,
    b.description,
    b.cover_url,
    b.read_time,
    b.rating,
    b.total_page_number,
    al.level
ORDER BY
    num_readers DESC;

-- View for listing the hours with more activity from users
CREATE OR REPLACE VIEW list_user_activity_hours AS
SELECT
    EXTRACT(HOUR FROM event_timestamp) AS hours,
    COUNT(DISTINCT user_id) AS total_users
FROM (
    SELECT
        user_id,
        action,
        generate_series(start_time, end_time, interval '1 minute') AS event_timestamp
    FROM
        user_events
    WHERE
        action = 'activity'
) AS expanded_events
GROUP BY
    EXTRACT(HOUR FROM event_timestamp)
ORDER BY
    total_users DESC;

-- Procedure to verify if user is admin 
CREATE OR REPLACE FUNCTION is_user_admin(user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1
    FROM users u
    JOIN user_types ut ON u.user_type_id = ut.id
    WHERE ut.user_type = 'Admin' AND u.id = user_id
  );
END;
$$ LANGUAGE plpgsql;

-- TEST's
SELECT * FROM list_books_by_filters (null, '{}', '{}')
SELECT * FROM list_activities_by_book_id('e87fb162-c419-44e7-86fb-34705dc86f8d')
SELECT * FROM list_popular_books
SELECT * FROM list_user_activity_hours

-- DROP's
DROP FUNCTION IF EXISTS get_activities_by_book(VARCHAR(70), VARCHAR[], VARCHAR[]);
DROP FUNCTION IF EXISTS list_activities_by_book_id(UUID);
DROP VIEW IF EXISTS list_activities_by_book_id(UUID);
DROP VIEW IF EXISTS list_activities_by_book_id(UUID);