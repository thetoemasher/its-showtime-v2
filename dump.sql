create table users(
    user_id serial primary key,
    username varchar(20),
    password text,
    zipcode varchar(5),
    first_name varchar(20),
    last_name varchar(20),
    email varchar(255)
)

-- create table categorized_films (
--     user_id integer references users(id),
--     movie_id text,
--     category text
-- )

-- create table order_history(
--     id serial primary key,
--     user_id integer references users(id),
--     totalPrice real,
--     ts timestamp
-- )

-- create table ordered_item(
--     id serial primary key,
--     movie_id text,
--     order_id integer references order_history(id),
--     quantity integer,
--     theater_id text,
--     showtime text,
--     movie_title text, 
--     movie_poster text, 
--     theater_name text, 
--     theater_address text
-- )