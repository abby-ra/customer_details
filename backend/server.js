const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password :"",
    database : "crud"
})


app.get('/', (req, res) => {
    const sql = "SELECT  * FROM customers";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);

    })

})

app.get('/', (re, res) => {
    return res.json("From Backend Side");
})



app.put('/create',(req, res) => {
    const sql ="INSERT INTO users (`name`,`phone`,`email`) VALUES(?)";
    const values = [
        req.body.name,
        req.body.phone,
        req.body.email,
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("created");
    })
})

app.listen(3000, () => {
    console.log("Listening....");

})