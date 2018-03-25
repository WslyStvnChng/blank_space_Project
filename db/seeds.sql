USE blank_space_db;

-- user dummy data
INSERT INTO Users (username, nsfwAllow, createdAt, updatedAt)
VALUES ("tucker6969", true, "2018-03-25", "2018-03-25");

INSERT INTO Users (username, nsfwAllow, createdAt, updatedAt)
VALUES ("mary321", true, "2018-03-20", "2018-03-20");

INSERT INTO Users (username, nsfwAllow, createdAt, updatedAt)
VALUES ("matt123", true, "2018-02-5", "2018-02-5");

-- post dummy data
INSERT INTO Posts (title, username, nsfw, imgURL, createdAt, updatedAt, UserId)
VALUES ("Post 1", "tucker6969", true, "https://i.redd.it/a2qih4i4sxn01.jpg", "2018-03-25", "2018-03-25", 1);

INSERT INTO Posts (title, username, nsfw, imgURL, createdAt, updatedAt, UserId)
VALUES ("Post 2", "mary321", false, "https://i.redd.it/23and2cw6wn01.png", "2018-03-20", "2018-03-20", 2);

INSERT INTO Posts (title, username, nsfw, imgURL, createdAt, updatedAt, UserId)
VALUES ("Post 3", "matt123", false, "https://i.redd.it/5hluc5sq1un01.jpg", "2018-02-5", "2018-02-5", 3);

-- tag dummy data
INSERT INTO Tags (title, comment, link, createdAt, updatedAt)
VALUES ("Tag 1", "This is the first comment", "http://www.google.com", "2018-03-25", "2018-03-25");

INSERT INTO Tags (title, comment, link, createdAt, updatedAt)
VALUES ("Tag 2", "This is the second comment", "http://www.reddit.com", "2018-03-20", "2018-03-20");

INSERT INTO Tags (title, comment, link, createdAt, updatedAt)
VALUES ("Tag 3", "This is the third comment", "http://www.yahoo.com", "2018-02-5", "2018-02-5");
