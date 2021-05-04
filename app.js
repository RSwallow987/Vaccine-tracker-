const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();
//express server 
const app = express();
// Server configuration

app.set("views", path.join(__dirname, "views"));
//creating an express router 
const router = express.Router();

// config middlewares 
//serve static files in express
app.use(express.static(path.join(__dirname, "public"))); //then e.g. this will work http://localhost:3000/images/firefox-icon.png
//app.use(express.urlencoded({ extended: false })); // use the middleware “express.urlencoded()” so that request.body retrieves the posted values

//Connection to database 
const db_name = path.join(__dirname, "data", "apptest.db");
console.log("Database full path -" + db_name);
const db = new sqlite3.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'apptest.db'");
});

//creating a user table 
const sql_create = `CREATE TABLE IF NOT EXISTS User (
    User_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name VARCHAR(100) NOT NULL,
    Surname VARCHAR(100) NOT NULL,
  );`;

db.run(sql_create,err => {
    if (err){
        return console.error(err.message)
    }
    console.log("Successful creation of User Table")
})

// Database seeding
const sql_insert = `INSERT INTO User (Name, Surname) VALUES
('John', 'Doe'),
('Bill', 'Gates');`;

db.run(sql_insert, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful creation of 2 users");
});

//Get 
// '/' means that the app requests for the root url 
router.get("/", function (req, res) {
  
    const sql = "SELECT * FROM User";
    db.all(sql, [], (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
  
      console.log("rows - " + rows.length);
      //__dirname resolves to your project folder.
     // res.render(__dirname + "/views/index.ejs", {
      //  status: "No status",
      //  users: rows,
      });
  
      //The sendfile method, on the other hand, simply sends a given file to the client, regardless of the type and contents of the file.
      //render allows processing of variables but requires use of a templating engine e.g. name
      //  res.sendFile(
      //    path.join(__dirname + "/views/index.html")
      //  );
    });
//});

//router.get("/about", function (req, res) {
//  res.sendFile(path.join(__dirname + "/views/about.html")); // if you have an about page 
//});

// POST /
router.post("/", function (req, res) {
    const user = [req.body.fname, req.body.lname];
    console.log("Submitted name: " + req.body.fname);
    console.log("Submitted surname: " + req.body.lname);
    const sql = "INSERT INTO User (Name, Surname) VALUES (?,?)";
    db.run(sql, user, (err) => {
        if (err) {
            return console.error(err.message);
          }
      res.render(__dirname + "/views/index.html", { status: "Saved to DB" });
      //res.redirect("/");
    });
  });



//add the router
app.use("/", router);
app.listen(process.env.port || 3000);
//Display successful deployment message 
console.log("Running at Port 3000");
