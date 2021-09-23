const express =require('express')
const app =express();

app.get("/", (req, res) => {
    res.status(500).send("Carnage Bhaimya");
});  

// app.get("/ab?cd", (req, res) => {
//     res.send("abcd");
//     console.log(req.query);
//   });

app.get("/ab+cd", (req, res) => {
    res.send("abcd");
    console.log(req.query);
});

// app.get("/ab*cd", (req, res) => {
//     res.send("abcd");
//     console.log(req.query);
// });

// app.get("/user/:id/books/:bookId", (req, res) => {
//     console.log(req.query);
//     res.send(req.params);
// });


app.listen(5000);