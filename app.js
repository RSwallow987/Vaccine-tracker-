const express = require("express");
const path = require("path");
//const sqlite3 = require("sqlite3").verbose();
//express server 
const app = express();
const router = express.Router();


//const db_name = path.join(__dirname, "data", "apptest.db");
//const db = new sqlite3.Database(db_name, err => {
  //if (err) {
  //  return console.error(err.message);
  //}
 // console.log("Successful connection to the database 'apptest.db'");
//});

//const sql_create = `CREATE TABLE IF NOT EXISTS Vaccine (
  //  Patient_ID INTEGER PRIMARY KEY AUTOINCREMENT,
  //  Name VARCHAR(100) NOT NULL,
   // Surname VARCHAR(100) NOT NULL,
   // Comments TEXT
 // );`;
//db.run(sql_create,err => {
  //  if (err){
   //     return console.error(err.message)
  //  }
  //  console.log("Successful creation of Vaccine Table")
//})


//serve static files in express
app.use(express.static(path.join(__dirname, "public"))); //then e.g. this will work http://localhost:3000/images/firefox-icon.png

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/about.html")); // if you have an about page 
});

//add the router
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");