const mysql = require('mysql') //import SQL

let connection = mysql.createConnection({
    host: 'den1.mysql3.gear.host',
    user: 'ysdb1',
    password: 'adminadmin1!',
    database:'ysdb1'
})

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
});