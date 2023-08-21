const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host: "Localhost",
    user: "root",
    password: "",
    database: "crud"
});

db.connect(err => {
    if (err) {
        console.log('error connecting the database', err); // there is no error in connection
        return err;
    }
})
console.log('conected to the database');

console.log(db)

app.get('/login', (req, res) => {
    const sql = "SELECT * FROM login WHERE 1";
    console.log(req.body);
    const values = [
        req.body.email,
        req.body.password
    ]
    db.query(sql, values, (err, data) => {
        if (err) return res.json("Login Failed");
        return res.json(data);
    })
})

app.listen(8082, () => {
    console.log('Listening'); // port is also working
});





