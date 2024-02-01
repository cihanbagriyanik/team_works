"use strict";

/*----------------------------------

//!         Team Work

------------------------------------*/

const express = require("express"); // Assign expressFramework to express variable.
const app = express();
const router = express.Router();

const PORT = 8000;

/* -------------------------------------------------------------------------- */
//? 1. Write the regex expression that matches the required conditions.

//* -Write a router that matches /abc or /acd path?

//* Write a router that matches /a(any single digit)/ followed by 2 times c or 3 times c or...?
//* Routes that must end with string "Hello" and can have any no. of any character before that?
//* Matching routes must end with the string "Hello" and must not have any characters before that?

/* -------------------------------------------------------------------------- */
//? 2. I have an object with student information. Code the desired routers.
//      -- Returns all students in json format with the get method
//      -- Returns information about the requested student in json format
//      -- If there is any missing/error in the code, please correct it.

const students = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Steve",
  },
];
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
app.use(router);
/* -------------------------------------------------------------------------- */
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
/* -------------------------------------------------------------------------- */
