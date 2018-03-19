create database billboard;
\c billboard
create table hot100 (
  rank int,
  title text,
  artist text
)

insert into hot100 values
  (1, 'Despacito', 'Luis Fonsi & Daddy Yankee Feat. Justin Bieber'),
  (2, 'Will Thoughts', 'DJ Khaled Feat. Rihanna & Bryson Tiller'),
  (3, 'I''m the One', 'DJ Khaled Feat. Justin Bieber, Quavo, Chance the Rapper'),
  (4, 'That''s What I Like', 'Bruno Mars');

create table users (
  username text,
  password text
)

insert into users values
  ('ann', 'password'),
  ('ben', '12345678'),
  ('joe', 'password');
