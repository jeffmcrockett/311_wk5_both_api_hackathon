const mysql = require('mysql') //import SQL

let connection = mysql.createConnection({
    host: 'den1.mysql3.gear.host',
    user: 'hackathon31',
    password: 'Tp4iMH!!vaYG',
    database:'hackathon31'
})

connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
});