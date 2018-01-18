USE friend_finder;

CREATE TABLE friends (
  id INT AUTO_INCREMENT NOT NULL,
  name VARCHAR(30) NOT NULL,
  photo VARCHAR(30),
  scores INTEGER(10),
  PRIMARY KEY (id)
);

INSERT INTO friends(name, photo)
VALUES ("Ahmed", "https://teamsterriders.org/wp-content/uploads/2017/03/ProfileHolder.png")