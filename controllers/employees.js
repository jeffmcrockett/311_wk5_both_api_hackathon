const connection = require('../sql/connection')

const list = (req, res) => {
  console.log(`inside the GET /employees list route`);
  connection.query('SELECT * FROM employees LIMIT 100', function(err, results){
    if(err){
      console.log(`there is an error: ${err}`);
      res.status(500).send(`internal service error`)
    } else {
      res.json(results)
    }
  });
};

const show = (req, res) => {
  console.log(`inside the GET /employees by id route`)
  res.send(`getting employee by id...`)
};

const create = (req, res) => {
  console.log(`inside the GET /employees by first_name route`)
  res.send(`getting employee by first name...`)
};

module.exports = { list, show, create };