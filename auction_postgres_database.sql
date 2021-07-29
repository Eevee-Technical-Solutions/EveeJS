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

-- itemid: 0,
--     name: '',
--     description: '',
--     startingPrice: 0,
--     Url: '',
--     isComplete: false,

-- SELECT * FROM "public"."bids" INNER JOIN "public"."user" ON "bids"."userId" = "user"."userId" INNER JOIN "user"."userId" ON "bids"."userId"


INSERT INTO "item" ("itemId", "name", "description", "startingPrice", "Url", "isComplete") VALUES (DEFAULT, 'Original Pikachu Card', 'With gloriously chubby cheeks and a tubby body, this original pikachu card is highly collectible!', 10, false); 
INSERT INTO "item" ("itemId", "name", "description", "startingPrice", "Url", "isComplete") VALUES (DEFAULT, 'Original Bulbasaur Card', 'An original bulbasaur capable of razor leafing its way into your heart!', 25, “https://imgur.com/jPbW4JN”, false);
INSERT INTO "item" ("itemId", "name", "description", "startingPrice", "Url", "isComplete") VALUES (DEFAULT, 'Original Mewtwo Card', 'The legendary nigh untameable Mewtwo now available in card form to crush your enemies and make them question the meaning of life.', 45, “https://imgur.com/sC2AHgK”, false);
INSERT INTO "item" ("itemId", "name", "description", "startingPrice", "Url", "isComplete") VALUES (DEFAULT, 'Shiny Charizard', 'Of the original pokemon card productions, this is one of the rarest and most coveted. Desired by collectors across the world ', 170,000, “https://imgur.com/HJnrdK8”, false);
INSERT INTO "item" ("itemId", "name", "description", "startingPrice", "Url", "isComplete") VALUES (DEFAULT, 'Original Magikarp Card', 'With little capabilities but an incredible destiny, this Magikarp will splash its way into your deck!', 2, “https://imgur.com/dwMCZ0T”, false);
INSERT INTO "item" ("itemId", "name", "description", "startingPrice", "Url", "isComplete") VALUES (DEFAULT, 'Holo Gold Star Rayquaza', 'Featuring an embossed foil star to mark its rarity, you too can own this alternate version of the legendary Pokemon!', 45100, false);
INSERT INTO "item" ("itemId", "name", "description", "startingPrice", "Url", "isComplete") VALUES (DEFAULT, 'school', 'Very nice school', 222, false);
INSERT INTO "item" ("itemId", "name", "description", "startingPrice", "Url", "isComplete") VALUES (DEFAULT, 'Holographic Lugia', 'The star of Pokemon Silver, this legendary pokemon card can now be yours!', 129000, "https://BSA3CQc", false);
INSERT INTO "item" ("itemId", "name", "description", "startingPrice", "Url", "isComplete") VALUES (DEFAULT, 'Original Eevee Card', 'Vintage Eevee never played in excellent condition', 253, "https://imgur.com/huAGJec", false);


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
