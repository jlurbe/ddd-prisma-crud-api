-- Table creation with MySQL-specific syntax
CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  ctime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  mtime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Sample user data
INSERT INTO users (username, email, password) VALUES 
('johndoe', 'johndoe@gmail.com', '$2a$10$DPlDlmKUMKHqtOj0zh6RlOjot7/QgWKFBhbQJoHtuSgheJ38X2dmG'),
('janedoe', 'janedoe@gmail.com', '$2a$10$9tDnBjy3lRVFGBu/gbQFzeC3ZbRM9UnfnQ1FyYFX0LyxxSwfCkNji'),
('alexsmith', 'alexsmith@gmail.com', '$2a$10$3i6Umo2b8itbzpCqIhVktuTlQJL96Vx92kjFzbrXEL4V9b2b2J7Na'),
('emilybrown', 'emilybrown@gmail.com', '$2a$10$uAlncsCX.28e/AhJ9T0JVOM84IQzqGYPqBmHsmdavONmwqAysXTOG'),
('adamwilson', 'adamwilson@gmail.com', '$2a$10$xG8sXdVpQb0lELmj0BdMs.F/rmS/AgfZvWk2jTSPQlDP.CArHnlXS'),
('sarahjones', 'sarahjones@gmail.com', '$2a$10$YuVL3jHZLYKq9SC7yl.E4OTWnl09QKFL9XtkFTg/cNJtsAFO1iU8O'),
('michaelgreen', 'michaelgreen@gmail.com', '$2a$10$ulJxdCMcsgSWOW84CrBI9eTmBCcN2YRwLztL0I9k.Amqcldm6zV2K'),
('laurawilson', 'laurawilson@gmail.com', '$2a$10$Mo6IfchqBj18EenwrUJTR.l/8tVcnC7xI0sFEWkJ0QhdmImFCIgbK'),
('alexjohnson', 'alexjohnson@gmail.com', '$2a$10$FDbalSHXHg1qLVtN8JYJh.eGgSM9LXNqX1N2XKZw9b8dH5IhN5O0S'),
('danielthomas', 'danielthomas@gmail.com', '$2a$10$6pmMRZ0uhvH5d6G7qNWuYeFLqfwQG4SK9W9r78mW.2Zz0up3h.WHy');