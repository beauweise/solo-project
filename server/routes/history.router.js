const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "user_entered_data"
  JOIN "lake" ON "user_entered_data"."lake_id" = "lake"."id"
  JOIN "weather" ON "user_entered_data"."weather_id" = "weather"."id"
  JOIN "wind" ON "user_entered_data"."wind_id" = "wind"."id"
  WHERE "user_id" = ${req.user.id}`;

  pool.query(queryText).then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  });
});



module.exports = router;
