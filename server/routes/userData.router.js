const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  const queryText = `
  SELECT "user_entered_data"."id","user_id", "date", "lake_id", 
  "weather_id", "water_temp","water_clarity", "fish_count","see_fish",
  "lures", "wind_id", "notes","lake","weather","wind" FROM "user_entered_data"
  JOIN "lake" ON "user_entered_data"."lake_id" = "lake"."id"
  JOIN "weather" ON "user_entered_data"."weather_id" = "weather"."id"
  JOIN "wind" ON "user_entered_data"."wind_id" = "wind"."id"
  WHERE "lake_id" = ${req.params.id}
  ORDER BY "date" DESC`;

  pool.query(queryText).then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post('/',rejectUnauthenticated, (req, res) => {
  console.log("inreq.body",req.body);
  
  let queryText = `INSERT INTO "user_entered_data" ("user_id","date","lake_id","weather_id",
  "water_temp","water_clarity","fish_count","see_fish","lures","wind_id","notes")
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;

  pool.query(queryText, [req.user.id, req.body.date, req.body.lake, req.body.weather,
  req.body.waterTemp, req.body.waterClarity, req.body.fish_count, req.body.fishSaw,
  req.body.lures, req.body.wind, req.body.notes]).then((result) => {
    res.sendStatus(201);
  }).catch((error) => {
    res.sendStatus(500);
  });
});
router.delete('/:id',rejectUnauthenticated, (req, res) => {
  console.log("In delete server-side req with", req.params);
  // DELETE route code here
  if (req.isAuthenticated()) {
    console.log("user is", req.user);
  }
  const queryText = `DELETE FROM "user_entered_data" WHERE "id" = $1 AND "user_id" = $2;`
  pool.query(queryText, [req.params.id, req.user.id])
    .then((results) => res.sendStatus(200))
    .catch(() => res.sendStatus(500));
});

router.put('/',rejectUnauthenticated, (req, res) => {
  console.log('66666666666666666666',req.body);
  
  const queryText = `UPDATE "user_entered_data"
  SET "date" = $1, "lake_id" = $2,"weather_id" = $3, "water_temp" = $4,"water_clarity" = $5,
  "fish_count" = $6,"see_fish" = $7, "lures" = $8,"wind_id" = $9, "notes" = $10
  WHERE "id" = $11;`;
  pool.query(queryText, [req.body.date, req.body.lake_id, req.body.weather_id, 
  req.body.water_temp, req.body.water_clarity,req.body.fish_count, req.body.see_fish,
   req.body.lures, req.body.wind_id, req.body.notes, req.body.id])
    .then((result) => {
      res.sendStatus(200)
    }).catch((error) => {
      console.log('error in put', error);
      res.sendStatus(500);
    })
})


module.exports = router;
