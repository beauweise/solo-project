const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "wind"`;

  pool.query(queryText).then((result) => {
    console.log(result.rows);
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  });

});




module.exports = router;
