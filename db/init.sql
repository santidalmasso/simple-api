DROP TABLE IF EXISTS notes;
CREATE TABLE notes (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  title TEXT,
  body TEXT
);