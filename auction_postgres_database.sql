SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- CREATE TABLE "user" (
-- "userId" SERIAL PRIMARY KEY,
-- "token"  VARCHAR,
-- "userName" VARCHAR
-- );

-- CREATE TABLE "item" (
-- "itemId" SERIAL PRIMARY KEY,
-- "name" VARCHAR ( 50 ),
-- "description" VARCHAR ( 250 ),
-- "startingPrice" bigint NOT NULL,
-- "Url" VARCHAR ( 250 ),
-- "isComplete" boolean
-- );

-- CREATE TABLE "bids" (
--   "bidID" SERIAL PRIMARY KEY,
--   "bidPrice" BIGINT,
--   "itemId" BIGINT,
--   "userId" BIGINT
-- );
-- SELECT * FROM "public"."bids" INNER JOIN "public"."user" ON "bids"."userId" = "user"."userId" INNER JOIN "user"."userId" ON "bids"."userId"


-- INSERT INTO "item" ("itemId", "name", "description", "startingPrice","isComplete") VALUES (DEFAULT, 'cat', 'Very nice cat', 252, false);
-- INSERT INTO "item" ("itemId", "name", "description", "startingPrice","isComplete") VALUES (DEFAULT, 'pokemon card', 'Eevee special edition', 25, false);
-- INSERT INTO "item" ("itemId", "name", "description", "startingPrice","isComplete") VALUES (DEFAULT, 'dog', 'Corgi!', 25, false);
-- INSERT INTO "item" ("itemId", "name", "description", "startingPrice","isComplete") VALUES (DEFAULT, 'GPU', 'gtx 270', 25, false);
-- INSERT INTO "item" ("itemId", "name", "description", "startingPrice","isComplete") VALUES (DEFAULT, 'Thermal', 'Zorushi thermal', 25, false);
-- INSERT INTO "item" ("itemId", "name", "description", "startingPrice","isComplete") VALUES (DEFAULT, 'ninja', 'Very nice ninja', 25, false);
-- INSERT INTO "item" ("itemId", "name", "description", "startingPrice","isComplete") VALUES (DEFAULT, 'school', 'Very nice school', 222, false);
-- INSERT INTO "item" ("itemId", "name", "description", "startingPrice","isComplete") VALUES (DEFAULT, 'rat', 'Very nice rat', 2, false);
-- INSERT INTO "item" ("itemId", "name", "description", "startingPrice","isComplete") VALUES (DEFAULT, 'bus', 'Very nice bus', 253, false);


-- INSERT INTO "user" ("userId", "userName") VALUES (DEFAULT, 'player1');
-- INSERT INTO "user" ("userId", "userName") VALUES (DEFAULT, 'player2');
-- INSERT INTO "user" ("userId", "userName") VALUES (DEFAULT, 'player3');

-- SELECT * FROM "public"."bids" INNER JOIN "public"."user" ON "bids"."userId" = "user"."userId"

INSERT INTO "bids" ("bidID", "bidPrice", "itemId", "userId") VALUES (DEFAULT, 430, 3, 1);
INSERT INTO "bids" ("bidID", "bidPrice", "itemId", "userId") VALUES (DEFAULT, 5100, 3, 4);
INSERT INTO "bids" ("bidID", "bidPrice", "itemId", "userId") VALUES (DEFAULT, 3000, 3, 3);
INSERT INTO "bids" ("bidID", "bidPrice", "itemId", "userId") VALUES (DEFAULT, 4230, 3, 2);
INSERT INTO "bids" ("bidID", "bidPrice", "itemId", "userId") VALUES (DEFAULT, 42330, 2, 4);
INSERT INTO "bids" ("bidID", "bidPrice", "itemId", "userId") VALUES (DEFAULT, 44230, 2, 2);
INSERT INTO "bids" ("bidID", "bidPrice", "itemId", "userId") VALUES (DEFAULT, 424233, 2, 1);
