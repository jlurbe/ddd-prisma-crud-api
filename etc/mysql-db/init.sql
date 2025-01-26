-- Table creation with MySQL-specific syntax
CREATE TABLE IF NOT EXISTS users (
  id CHAR(36) NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(100) NOT NULL,
  ctime DATETIME NOT NULL,
  mtime DATETIME NOT NULL
);

-- Sample user data
INSERT INTO users (id, name, email, password, ctime, mtime) VALUES 
(UUID(),'johndoe', 'johndoe@gmail.com', '$2a$10$DPlDlmKUMKHqtOj0zh6RlOjot7/QgWKFBhbQJoHtuSgheJ38X2dmG', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
(UUID(),'janedoe', 'janedoe@gmail.com', '$2a$10$9tDnBjy3lRVFGBu/gbQFzeC3ZbRM9UnfnQ1FyYFX0LyxxSwfCkNji', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
(UUID(),'alexsmith', 'alexsmith@gmail.com', '$2a$10$3i6Umo2b8itbzpCqIhVktuTlQJL96Vx92kjFzbrXEL4V9b2b2J7Na', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
(UUID(),'emilybrown', 'emilybrown@gmail.com', '$2a$10$uAlncsCX.28e/AhJ9T0JVOM84IQzqGYPqBmHsmdavONmwqAysXTOG', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
(UUID(),'adamwilson', 'adamwilson@gmail.com', '$2a$10$xG8sXdVpQb0lELmj0BdMs.F/rmS/AgfZvWk2jTSPQlDP.CArHnlXS', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
(UUID(),'sarahjones', 'sarahjones@gmail.com', '$2a$10$YuVL3jHZLYKq9SC7yl.E4OTWnl09QKFL9XtkFTg/cNJtsAFO1iU8O', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
(UUID(),'michaelgreen', 'michaelgreen@gmail.com', '$2a$10$ulJxdCMcsgSWOW84CrBI9eTmBCcN2YRwLztL0I9k.Amqcldm6zV2K', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
(UUID(),'laurawilson', 'laurawilson@gmail.com', '$2a$10$Mo6IfchqBj18EenwrUJTR.l/8tVcnC7xI0sFEWkJ0QhdmImFCIgbK', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
(UUID(),'alexjohnson', 'alexjohnson@gmail.com', '$2a$10$FDbalSHXHg1qLVtN8JYJh.eGgSM9LXNqX1N2XKZw9b8dH5IhN5O0S', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP()),
(UUID(),'danielthomas', 'danielthomas@gmail.com', '$2a$10$6pmMRZ0uhvH5d6G7qNWuYeFLqfwQG4SK9W9r78mW.2Zz0up3h.WHy', CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP());