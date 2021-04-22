const mysql = require('mysql');
const pool = require('../sql/connection');
const { handleSQLError } = require('../sql/error');
    // !this last file has not been created yet?

// We only need a GET function for this project
// We are not inserting, updating, or deleting

const get = (req, res) => {
    let sql = "QUERY GOES HERE"
    // where do we edit what goes in the brackets?
    sql = mysql.format(sql, [])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

module.exports = {
    get
  }