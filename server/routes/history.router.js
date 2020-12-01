const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
  } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/',rejectUnauthenticated, (req, res) => {
  const queryText = `
  SELECT "user_entered_data"."id","user_id", "date", "lake_id", 
  "weather_id", "water_temp","water_clarity", "fish_count","see_fish",
  "lures", "wind_id", "notes","lake","weather","wind" FROM "user_entered_data"
  JOIN "lake" ON "user_entered_data"."lake_id" = "lake"."id"
  JOIN "weather" ON "user_entered_data"."weather_id" = "weather"."id"
  JOIN "wind" ON "user_entered_data"."wind_id" = "wind"."id"
  WHERE "user_id" = ${req.user.id}
  ORDER BY "date" DESC`;

  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  });
});

module.exports = router;
