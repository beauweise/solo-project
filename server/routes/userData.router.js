const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {  
  let queryText = `INSERT INTO "user_entered_data" ("user_id","date","lake_id","weather_id",
  "water_temp","water_clarity","fish_count","see_fish","lures","wind_id","notes")
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;

  pool.query(queryText, [req.user.id, req.body.date, req.body.lake, req.body.weather,
    req.body.fishCaught,req.body.fishSaw,req.body.waterTemp,req.body.waterClarity,
  req.body.lures, req.body.wind, req.body.notes]).then((result) => {
    res.sendStatus(201);
  }).catch((error) => {
    res.sendStatus(500);
  });
});
router.delete('/:id', (req, res) => {
  console.log("In delete server-side req with", req.params);
  // DELETE route code here
  if (req.isAuthenticated()) {
    console.log("user is",req.user);
  }
  const queryText = `DELETE FROM "user_entered_data" WHERE "id" = $1 AND "user_id" = $2;`
  pool.query(queryText, [req.params.id, req.user.id])
  .then((results) => res.sendStatus(200))
  .catch(() => res.sendStatus(500));
});

module.exports = router;
