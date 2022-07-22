const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql  = require('mysql2');

app.use(cors());
app.use(express());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "jvj@2001", 
    database: "Jvj_Diary_login"
});

app.get('/api/get', (req,res) => {
    const details = "SELECT * FROM Login_page";
    db.query(details, (error,result) => {
        res.send(result);
    })
})

app.get("/", (req,res) => {
    // const insert = "INSERT INTO Login_page (name, email, contact) VALUES ('Jvj1', 'Jvj1@gmail.com', '137293792392')";
    // db.query(insert, (error, result) => {
    //     console.log("Error", error);
    //     console.log("Result", result);
    //     res.send("Welcome JVJ Diary");
    // });
    
})

app.listen(3001, () => {
    console.log("Server is running on port 3000");
})