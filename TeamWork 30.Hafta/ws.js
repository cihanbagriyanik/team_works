"use strict";

/*----------------------------------

//!          Work Shop

------------------------------------*/

app.get('/sum', (req, res) => {
    const { num1, num2 } = req.query;
    const sum = parseInt(num1) + parseInt(num2);
    res.send(`The sum of ${num1} and ${num2} is ${sum}.`);
    });
