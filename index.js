const express = require("express");
//create basic express server
const app = express();

const middleware = (req, res, next) => {
  console.log("Middleware executed!");
  const name = req.params.name;
  const surname = "Chanda";
  if (name != "Prithwi") {
    return res.status(400).json({ error: "Name parameter is required" });
  }
  //Send name+surname as next
  req.params.name = name + " " + surname;
  next();
};

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

app.get("/api", (req, res, next) => {
  res.json({ message: "Hello from API!" });
});

app.get("/api/user/:name", middleware, (request, response, next) => {
  const name = request.params.name;
  response.status(201).json({ message: `Hello ${name}!` });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

/**
 * Create a node js server
 * 1. Create a basic express server
 * 2. Create a database connection to it.
 * 3. Create a Post API that will store data in a table in the database.
 * 4. Create a Get API that will fetch all data from the table.
 * 5. Create a Get API that will fetch data from the database with a parameter.
 * 6. Create a PUT API that will update data in the database.
 * 7. Create a DELETE API that will delete data from the database.
 */
