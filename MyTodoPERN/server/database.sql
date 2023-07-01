
-- Запрос для создания БД в Postgress

CREATE DATABASE perntodo;

CREATE TABLE todo(
 todo_id SERIAL PRIMARY KEY,
 description VARCHAR(255)
);

