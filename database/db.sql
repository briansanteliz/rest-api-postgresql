create database API;

create table users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    email TEXT
);

insert into users (name, email) VALUES
('brian', 'brian@gmail.com'),
('jose', 'jose@mail.com'),
('katy', 'kat@mail.com');