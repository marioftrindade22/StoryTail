CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE user_types (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_type VARCHAR(30) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE age_groups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  age_group VARCHAR(15) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_type_id UUID NOT NULL,
  CONSTRAINT fk_user_type FOREIGN KEY (user_type_id) REFERENCES user_types (id),
  age_group_id UUID NOT NULL,
  CONSTRAINT fk_age_group FOREIGN KEY (age_group_id) REFERENCES age_groups (id),
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  profile_photo_url VARCHAR(255) NOT NULL,
  birth_date VARCHAR(10) NOT NULL,
  parental_code INT,
  refresh_token VARCHAR,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE user_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id),
  action VARCHAR(100) NOT NULL,
  start_time TIMESTAMP DEFAULT NOW(),
  end_time TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE access_levels (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  level VARCHAR(30) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE plans (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  access_level_id UUID UNIQUE NOT NULL,
  CONSTRAINT fk_access_level FOREIGN KEY (access_level_id) REFERENCES access_levels (id),
  name VARCHAR(30) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID UNIQUE NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id),
  plan_id UUID NOT NULL,
  CONSTRAINT fk_plan FOREIGN KEY (plan_id) REFERENCES plans (id),
  start_date TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE books (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  age_group_id UUID NOT NULL,
  CONSTRAINT fk_age_group FOREIGN KEY (age_group_id) REFERENCES age_groups (id),
  access_level_id UUID NOT NULL,
  constraint fk_access_level FOREIGN KEY (access_level_id) REFERENCES access_levels (id),
  title VARCHAR(70) UNIQUE NOT NULL,
  description TEXT NOT NULL,
  cover_url VARCHAR(255) UNIQUE NOT NULL,
  read_time INT NOT NULL,
  rating FLOAT,
  total_page_number INT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_id UUID NOT NULL,
  CONSTRAINT fk_book FOREIGN KEY (book_id) REFERENCES books (id),
  page_image_url VARCHAR(255) UNIQUE NOT NULL,
  audio_url VARCHAR(255) UNIQUE NOT NULL,
  page_index INT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT uc_book_page_index UNIQUE (book_id, page_index)
);

CREATE TABLE videos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_id UUID NOT NULL,
  CONSTRAINT fk_book FOREIGN KEY (book_id) REFERENCES books (id),
  title VARCHAR(70) NOT NULL,
  video_url VARCHAR(255) UNIQUE NOT NULL,
  play_time INT NOT NULL,
  rating FLOAT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE users_videos_watched (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id),
  video_id UUID NOT NULL,
  CONSTRAINT fk_video FOREIGN KEY (video_id) REFERENCES videos (id),
  progress INT NOT NULL,
  seconds_watched INT NOT NULL,
  watch_date TIMESTAMP,
  rating FLOAT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT uc_user_video UNIQUE (user_id, video_id)
);

CREATE TABLE nationalities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nationality VARCHAR(25) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE authors (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nationality_id UUID NOT NULL,
  CONSTRAINT fk_nationality FOREIGN KEY (nationality_id) REFERENCES nationalities (id),
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  description TEXT NOT NULL,
  author_photo_url VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE authors_books (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  author_id UUID NOT NULL,
  CONSTRAINT fk_author FOREIGN KEY (author_id) REFERENCES authors (id),
  book_id UUID NOT NULL,
  CONSTRAINT fk_book FOREIGN KEY (book_id) REFERENCES books (id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT uc_author_book UNIQUE (author_id, book_id)
);

CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(50) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE books_tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_id UUID NOT NULL,
  CONSTRAINT fk_book FOREIGN KEY (book_id) REFERENCES books (id),
  tag_id UUID NOT NULL,
  CONSTRAINT fk_tag FOREIGN KEY (tag_id) REFERENCES tags (id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT uc_book_tag UNIQUE (book_id, tag_id)
);

CREATE TABLE users_books_read (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_id UUID NOT NULL,
  CONSTRAINT fk_book FOREIGN KEY (book_id) REFERENCES books (id),
  user_id UUID NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id),
  progress INT NOT NULL,
  pages_read INT NOT NULL,
  rating FLOAT,
  read_date TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
 
  CONSTRAINT uc_user_book_read UNIQUE (user_id, book_id)
);

CREATE TABLE users_books_favourites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_id UUID NOT NULL,
  CONSTRAINT fk_book FOREIGN KEY (book_id) REFERENCES books (id),
  user_id UUID NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT uc_user_book_favourite UNIQUE (user_id, book_id)
);

CREATE TABLE users_books_to_read (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_id UUID NOT NULL,
  CONSTRAINT fk_book FOREIGN KEY (book_id) REFERENCES books (id),
  user_id UUID NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT uc_user_book_to_read UNIQUE (user_id, book_id)
);

CREATE TABLE activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  book_id UUID NOT NULL,
  CONSTRAINT fk_book FOREIGN KEY (book_id) REFERENCES books (id),
  title VARCHAR(70) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE activity_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  activity_id UUID NOT NULL,
  CONSTRAINT fk_activity FOREIGN KEY (activity_id) REFERENCES activities (id),
  title VARCHAR(70) NOT NULL,
  image_url VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE activities_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL,
  CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users (id),
  activity_id UUID NOT NULL,
  CONSTRAINT fk_activity FOREIGN KEY (activity_id) REFERENCES activities (id),
  is_done BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  CONSTRAINT uc_user_activity UNIQUE (user_id, activity_id)
);