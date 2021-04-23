const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'den1.mysql3.gear.host',
  user: 'hackathon31',
  password: 'Tp4iMH!!vaYG',
  database: 'hackathon31'
});

connection.connect(function(err) {
  if(err){
    console.log('error connecting : ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId)
});


// class Connection {
//   constructor() {
//     if (!this.pool) {
//       console.log('creating connection...')
//       this.pool = mysql.createPool({
//         connectionLimit: 100,
//         host: 'den1.mysql3.gear.host',
//         user: 'hackathon31',
//         password: 'Tp4iMH!!vaYG',
//         database: 'hackathon31'
//       })

//        return this.pool
//     }

//     return this.pool
//   }
// }

// const instance = new Connection()

module.exports = instance;