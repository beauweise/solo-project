
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
CREATE TABLE "user_entered_data"( 
"id" SERIAL PRIMARY KEY,
"user_id" INT REFERENCES "user",
"date" date,
"lake_id" INT REFERENCES "lake",
"weather_id" INT REFERENCES "weather",
"water_temp" integer,
"water_clarity" integer,
"fish_count" integer,
"see_fish" integer,
"lures" varchar (100),
"wind_id" INT REFERENCES "wind",
"notes" varchar (250)
);


CREATE TABLE "lake"( 
"id" SERIAL PRIMARY KEY,
"lake" varchar (50)
);
INSERT INTO "lake"("lake")
VALUES('All')
VALUES('Bemidji')
VALUES('Cass')
VALUES('Independence')
VALUES('Lake of the Woods')
VALUES('Leech')
VALUES('Little Boy/Wabedo')
VALUES('Mantrap')
VALUES('Mille Lacs')
VALUES('Miltona')
VALUES('Minnetonka')
VALUES('Pelican')
VALUES('Plantangenent')
VALUES('Sugar')
VALUES('Waconia')
VALUES('Winnibigoshish')
VALUES('Wolf')
VALUES('Vermillion');


CREATE TABLE "weather"( 
"id" SERIAL PRIMARY KEY,
"weather" varchar (50)
);
INSERT INTO "weather"("weather")
VALUES('Sunny')
VALUES('Partly Cloudy')
VALUES('Cloudy')
VALUES('Rain')
VALUES('Fog')
VALUES('Snow');

CREATE TABLE "wind"( 
"id" SERIAL PRIMARY KEY,
"wind" varchar (50)
);
INSERT INTO "weather"("weather")
VALUES('0')
VALUES('1-5')
VALUES('6-10')
VALUES('11-15')
VALUES('16-20')
VALUES('20-30');