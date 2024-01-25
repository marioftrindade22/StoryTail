INSERT INTO user_types (user_type) 
VALUES 
  ('User'), ('Admin'), ('Mod');

INSERT INTO age_groups (age_group) 
VALUES 
  ('0-2 year olds'), ('3-5 year olds'), ('6-8 years olds'), ('9-12 years olds');

INSERT INTO users (user_type_id, age_group_id, username, email, password, profile_photo_url, birth_date) 
VALUES 
  ((SELECT id FROM user_types WHERE user_type = 'User'), (SELECT id FROM age_groups WHERE age_group = '3-5 year olds'), 'julia15', 'julia15@gmail.com', '123456' , 'https://example1.com/profile.jpg', '2019-11-24'),
  ((SELECT id FROM user_types WHERE user_type = 'User'), (SELECT id FROM age_groups WHERE age_group = '0-2 year olds'), 'Lena24', 'lena@gmail.com', '123456', 'https://example2.com/profile.jpg', '2021-10-07'),
  ((SELECT id FROM user_types WHERE user_type = 'User'), (SELECT id FROM age_groups WHERE age_group = '3-5 year olds'), 'bushi', 'hugol22@gmail.com', '123456', 'https://example3.com/profile.jpg', '2019-05-18');

INSERT INTO user_events (user_id, action, start_time, end_time)
VALUES
	((SELECT id FROM users WHERE username = 'julia15'), 'activity', '2023-06-11 15:00:00.00', '2023-06-11 16:00:00.00'),
	((SELECT id FROM users WHERE username = 'julia15'), 'activity', '2023-06-11 17:00:00.00', '2023-06-11 17:30:00.00'),
	((SELECT id FROM users WHERE username = 'Lena24'), 'activity', '2023-06-12 17:00:00.00', '2023-06-12 17:30:00.00'),
	((SELECT id FROM users WHERE username = 'Lena24'), 'activity', '2023-06-12 19:00:00.00', '2023-06-12 20:00:00.00'),
	((SELECT id FROM users WHERE username = 'bushi'), 'activity', '2023-06-11 15:00:00.00', '2023-06-11 17:30:00.00'),
	((SELECT id FROM users WHERE username = 'bushi'), 'activity', '2023-06-12 16:00:00.00', '2023-06-11 17:00:00.00');

INSERT INTO access_levels (level) 
VALUES 
  ('Free'), ('Standard'), ('Premium');

INSERT INTO plans (access_level_id, name) 
VALUES
  ((SELECT id FROM access_levels WHERE level = 'Standard'), 'Standard'),
  ((SELECT id FROM access_levels WHERE level = 'Premium'), 'Premium');

INSERT INTO subscriptions (user_id, plan_id, start_date) 
VALUES
  ((SELECT id FROM users WHERE username = 'julia15'), (SELECT id FROM plans WHERE name = 'Standard'), '2023-11-01'),
  ((SELECT id FROM users WHERE username = 'Lena24'), (SELECT id FROM plans WHERE name = 'Premium'), '2023-11-07'),
  ((SELECT id FROM users WHERE username = 'bushi'), (SELECT id FROM plans WHERE name = 'Premium'), '2023-10-20');

INSERT INTO books (age_group_id, access_level_id, title, description, cover_url, read_time, total_page_number) VALUES 
  ((SELECT id FROM age_groups WHERE age_group = '3-5 year olds'), (SELECT id FROM access_levels WHERE level = 'Free'), 'The Koala Who Could', 'Description', 'cover1_url', 600, 32),
  ((SELECT id FROM age_groups WHERE age_group = '3-5 year olds'), (SELECT id FROM access_levels WHERE level = 'Standard'), 'Pancakes Pancakes', 'Description', 'cover2_url', 600, 32),
  ((SELECT id FROM age_groups WHERE age_group = '3-5 year olds'), (SELECT id FROM access_levels WHERE level = 'Standard'), 'Monkey Puzzle', 'Description' , 'cover3_url', 600, 32),
  ((SELECT id FROM age_groups WHERE age_group = '0-2 year olds'), (SELECT id FROM access_levels WHERE level = 'Premium'), 'Giraffes Can''t Dance', 'Description', 'cover4_url', 600, 32),
  ((SELECT id FROM age_groups WHERE age_group = '3-5 year olds'), (SELECT id FROM access_levels WHERE level = 'Premium'), 'Brown Bear What do You See?', 'Description', 'cover5_url', 540, 24);

INSERT INTO pages (book_id, page_image_url, audio_url, page_index) 
VALUES
  ((SELECT id FROM books WHERE title = 'Pancakes Pancakes'), 'page1_image_url', 'audio1_url', 1),
  ((SELECT id FROM books WHERE title = 'Pancakes Pancakes'), 'page2_image_url', 'audio2_url', 2),
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), 'page3_image_url', 'audio3_url', 1),
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), 'page4_image_url', 'audio4_url', 2),
  ((SELECT id FROM books WHERE title = 'The Koala Who Could'), 'page5_image_url', 'audio5_url', 1),
  ((SELECT id FROM books WHERE title = 'The Koala Who Could'), 'page6_image_url', 'audio6_url', 2);

INSERT INTO videos (book_id, title, video_url, play_time)
VALUES
  ((SELECT id FROM books WHERE title = 'Pancakes Pancakes'), 'Video 1', 'video1_url', 720),
  ((SELECT id FROM books WHERE title = 'Giraffes Can''t Dance'), 'Video 2', 'https://www.youtube.com/watch?v=aQMDaPRhA0I', 349),
  ((SELECT id FROM books WHERE title = 'The Koala Who Could'), 'Video 3', 'video3_url', 800);

INSERT INTO users_videos_watched (user_id, video_id, progress, seconds_watched, watch_date)
VALUES
  ((SELECT id FROM users WHERE username = 'julia15'),(SELECT id FROM videos WHERE title = 'Video 1'), 50, 360, '2023-11-5'),
  ((SELECT id FROM users WHERE username = 'Lena24'),(SELECT id FROM videos WHERE title = 'Video 1'), 60, 432, '2023-11-6'),
  ((SELECT id FROM users WHERE username = 'julia15'),(SELECT id FROM videos WHERE title = 'Video 2'), 20, 69, '2023-11-6');

INSERT INTO nationalities (nationality) 
VALUES
  ('American'),
  ('Portuguese'),
  ('British');

INSERT INTO authors (nationality_id, first_name, last_name, description, author_photo_url)
VALUES
  ((SELECT id FROM nationalities WHERE nationality = 'British'), 'Julia', 'Donaldson', 'Julia Donaldson is an English children’s author. She has written more than 100 plays and books for children and teenagers. Donaldson was born on September 16, 1948, in England. As a child she wrote plays and choreographed dances, which she and her younger sister, Mary, performed. Donaldson studied drama and French at the University of Bristol. Afterward she worked in publishing and as a teacher. Donaldson went on to write some of the United Kingdom’s best-selling picture books.', 'author1_photo_url'),
  ((SELECT id FROM nationalities WHERE nationality = 'American'), 'Eric', 'Carle', 'Eric Carle, (born June 25, 1929, Syracuse, New York, U.S.—died May 23, 2021, Northampton, Massachusetts), American writer and illustrator of children’s literature who published numerous best-selling books, among them The Very Hungry Caterpillar (1969), which by 2018 had sold some 50 million copies and had been translated into more than 60 languages.', 'author2_photo_url'),
  ((SELECT id FROM nationalities WHERE nationality = 'British'), 'Giles', 'Andreae', 'Giles Andreae (born 16 March 1966) is a British writer and illustrator. He is the creator of the stickman poet Purple Ronnie and the humorous artist/philosopher Edward Monkton, and is the author of Giraffes Can''t Dance and many other books for children.', 'author3_photo_url'),
  ((SELECT id FROM nationalities WHERE nationality = 'British'), 'Rachel', 'Bright', 'Rachel Bright is a wordsmith, illustrator and professional thinker of happy thoughts. She has written several books for children, including Love Monster, The Lion Inside and The Koala Who Could – winner of the Evening Standard Oscar’s Book Prize and the Sainsbury’s Book Award. Her books have sold over 300,000 copies in the UK alone and been translated into over 30 languages. She is also the creator of award-winning stationery and homewares range, The Brightside. Rachel lives on a farm near the seaside, with her partner and their two young daughters.', 'author4_photo_url');

INSERT INTO authors_books (author_id, book_id)
VALUES
  ((SELECT id FROM authors WHERE first_name = 'Giles' AND last_name = 'Andreae'), (SELECT id FROM books WHERE title = 'Giraffes Can''t Dance')),
  ((SELECT id FROM authors WHERE first_name = 'Rachel' AND last_name = 'Bright'), (SELECT id FROM books WHERE title = 'The Koala Who Could')),
  ((SELECT id FROM authors WHERE first_name = 'Eric' AND last_name = 'Carle'), (SELECT id FROM books WHERE title = 'Pancakes Pancakes')),
  ((SELECT id FROM authors WHERE first_name = 'Eric' AND last_name = 'Carle'), (SELECT id FROM books WHERE title = 'Brown Bear What do You See?')),
  ((SELECT id FROM authors WHERE first_name = 'Julia' AND last_name = 'Donaldson'), (SELECT id FROM books WHERE title = 'Monkey Puzzle'));

INSERT INTO tags (name) 
VALUES 
  ('Animals'), ('Art'), ('Activities and sports'), ('Colours'), ('Clothes'), ('Christmas'), ('Celebrations'), ('Dinosaurs'), ('Emotions and feelings'), ('Family'), ('Friendship'), ('Food'), ('House'), ('Kindness'), ('Positivity'), ('Space');

INSERT INTO books_tags (book_id, tag_id)
VALUES
  ((SELECT id FROM books WHERE title = 'Giraffes Can''t Dance'), (SELECT id FROM tags WHERE name = 'Animals')),
  ((SELECT id FROM books WHERE title = 'Giraffes Can''t Dance'), (SELECT id FROM tags WHERE name = 'Family')),
  ((SELECT id FROM books WHERE title = 'Giraffes Can''t Dance'), (SELECT id FROM tags WHERE name = 'Activities and sports')),
  ((SELECT id FROM books WHERE title = 'Monkey Puzzle'), (SELECT id FROM tags WHERE name = 'Animals')),
  ((SELECT id FROM books WHERE title = 'Monkey Puzzle'), (SELECT id FROM tags WHERE name = 'Family')),
  ((SELECT id FROM books WHERE title = 'The Koala Who Could'), (SELECT id FROM tags WHERE name = 'Emotions and feelings')),
  ((SELECT id FROM books WHERE title = 'The Koala Who Could'), (SELECT id FROM tags WHERE name = 'Friendship')),
  ((SELECT id FROM books WHERE title = 'The Koala Who Could'), (SELECT id FROM tags WHERE name = 'Kindness')),
  ((SELECT id FROM books WHERE title = 'The Koala Who Could'), (SELECT id FROM tags WHERE name = 'Positivity')),
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), (SELECT id FROM tags WHERE name = 'Animals')),
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), (SELECT id FROM tags WHERE name = 'Colours')),
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), (SELECT id FROM tags WHERE name = 'Family')),
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), (SELECT id FROM tags WHERE name = 'Kindness')),
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), (SELECT id FROM tags WHERE name = 'Positivity')),
  ((SELECT id FROM books WHERE title = 'Pancakes Pancakes'), (SELECT id FROM tags WHERE name = 'Food')),
  ((SELECT id FROM books WHERE title = 'Pancakes Pancakes'), (SELECT id FROM tags WHERE name = 'Family'));

INSERT INTO users_books_read (book_id, user_id, progress, pages_read, read_date)
VALUES
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), (SELECT id FROM users WHERE username = 'julia15'), 50, 12, '2023-11-17'),
  ((SELECT id FROM books WHERE title = 'Pancakes Pancakes'), (SELECT id FROM users WHERE username = 'bushi'), 21.87, 7, '2023-11-17'),
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), (SELECT id FROM users WHERE username = 'bushi'), 75, 18, '2023-11-17');

INSERT INTO users_books_favourites (book_id, user_id)
VALUES
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), (SELECT id FROM users WHERE username = 'julia15')),
  ((SELECT id FROM books WHERE title = 'Pancakes Pancakes'), (SELECT id FROM users WHERE username = 'bushi')),
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), (SELECT id FROM users WHERE username = 'bushi'));

INSERT INTO users_books_to_read (book_id, user_id)
VALUES
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), (SELECT id FROM users WHERE username = 'Lena24')),
  ((SELECT id FROM books WHERE title = 'Pancakes Pancakes'), (SELECT id FROM users WHERE username = 'Lena24')),
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), (SELECT id FROM users WHERE username = 'julia15'));

INSERT INTO activities (book_id, title, description)
VALUES
  ((SELECT id FROM books WHERE title = 'Brown Bear What do You See?'), 'Be an artist', 'Giraffe handprint – Use yellow ink to make a handprint giraffe. Use brown ink to make its spots and other details.'),
  ((SELECT id FROM books WHERE title = 'Pancakes Pancakes'), 'Be a cook', 'Giraffe Pancake Food Art – Use your favourite pancake recipe to make several flat pancakes. Cut them in various sizes to make different giraffe shapes. Use chocolate, peanut butter, fruit or marshmallows for eyes and dots. Enjoy your snack!');

INSERT INTO activity_images (activity_id, title, image_url)
VALUES
  ((SELECT id FROM activities WHERE title = 'Be an artist'), 'Giraffe handprint', 'image1_url'),
  ((SELECT id FROM activities WHERE title = 'Be a cook'), 'Giraffe cake', 'image2_url');

INSERT INTO activities_users (user_id, activity_id)
VALUES
  ((SELECT id FROM users WHERE username = 'Lena24'), (SELECT id FROM activities WHERE title = 'Be an artist')),
  ((SELECT id FROM users WHERE username = 'julia15'), (SELECT id FROM activities WHERE title = 'Be an artist')),
  ((SELECT id FROM users WHERE username = 'bushi'), (SELECT id FROM activities WHERE title = 'Be a cook'));