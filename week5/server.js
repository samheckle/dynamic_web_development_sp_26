// 1. all library imports happen at the top of our file
// imports the express library
const express = require("express");
// importing our db library
const nedb = require("@seald-io/nedb");

// 2. set up our variables to be used
const app = express();
const database = new nedb({ filename: "database.txt", autoload: true });

// 3. middleware -- in between steps for our apps
app.use(express.static("assets"));
app.use(express.urlencoded({ extended: true }));

// 4. ROUTES
app.get("/create", (request, response) => {
  response.sendFile("make-a-post.html", { root: "./assets" });
});

app.post("/post", (request, response) => {
  console.log(request.body);

  let date = new Date()

  let dataToBeAdded = {
    username: request.body.user,
    content: request.body.content,
    time: date.toLocaleString()
  };

  // 2 params:
  // 1. obj to be added
  // 2. action (callback function)
  database.insert(dataToBeAdded, (err, dbData) => {
    // err is populated by nedb if there is error
    if (err) console.log(err);
    // print out the data that was added to the db
    console.log(dbData);
  });

  //   response.send("hihihihi");
  response.redirect("/create");
});

app.get('/all-posts', (request, response)=>{

    // passing in an empty obj to the search param returns everything inside the db
    let query = {}

    database.find(query, (err, dbData)=>{
        // array of all the items inside the db
        console.log(dbData)
        response.json({posts: dbData})
    })
})

// ALWAYS GOES LAST
app.listen(80, () => {
  console.log("server is running");
});
