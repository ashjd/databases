CREATE DATABASE chat;

USE chat;

CREATE TABLE MESSAGES (
  id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(300) NOT NULL,
  username VARCHAR(300) NOT NULL,
  roomname VARCHAR(300) NOT NULL,
  PRIMARY KEY (id)
);

-- CREATE TABLE rooms (
--   roomId INT NOT NULL AUTO_INCREMENT,
--   roomname VARCHAR(50) NOT NULL,
--   PRIMARY KEY (roomId)
-- );

-- CREATE TABLE users (
--   userId INT NOT NULL AUTO_INCREMENT,
--   username VARCHAR(50) NOT NULL,
--   PRIMARY KEY (userId)
-- );

-- CREATE TABLE messages (
--   id INT NOT NULL AUTO_INCREMENT,
--   messages VARCHAR(300) NOT NULL,
--   user_id INT NOT NULL,
--   room_id INT NOT NULL,
--   FOREIGN KEY (user_id) REFERENCES users(userId),
--   FOREIGN KEY (room_id) REFERENCES rooms(roomId),
--   PRIMARY KEY (id)
-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

