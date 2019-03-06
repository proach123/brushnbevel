create table users (
artist_id serial primary key,
username varchar(50),
password varchar(250),
balance integer,
user_img text,
authorized boolean DEFAULT FALSE
)


CREATE TABLE artwork (
id SERIAL PRIMARY KEY,
name varchar(250),
description VARCHAR(250),
artist_id integer,
painting_url text,
price INTEGER,
gallery_approved boolean DEFAULT false
)



CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;