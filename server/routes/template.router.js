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
  // POST route code here
  let queryText = `INSERT INTO "user_entered_data" ("user_id","date","lake","weather","water_temp","water_clarity","fish_count","see_fish","lures","wind","notes")
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);`;

  pool.query(queryText, [req.body.user_id, req.body.date, req.body.lake, req.body.weather,
  req.body.water_temp, req.body.clarity, req.body.fish_count, req.body.see_fish, req.body.lures, req.body.lures, req.body.wind, req.body.notes]).then((result) => {
    res.sendStatus(201);
  }).catch((error) => {
    console.log('error in POST request', error);
    res.sendStatus(500);
  });
});

module.exports = router;
