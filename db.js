const mysql = require("mysql");

const db = mysql.createConnection({
    host: "eu-cdbr-west-03.cleardb.net",
    user: "b2a04685658a7e",
    password: "29775728",
    database: "heroku_678683cc48995d6"
})

db.connect(err => {
    if (err) {
        console.log(err)
    } else {
        console.log("connected to db")
    }
})

let Query = (q, params) => {
    return new Promise((resolve, reject) => {
        db.query(q, params, (err, results) => {
            if (err) {
                reject(err)
                console.log(err)
            } else {
                resolve(results)
            }
        })
    })
}

module.exports = Query
