import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send(`<h1>Welcome to Express</h1>
        <a href="http://localhost:3000/menu">menu</a><br>
        <a href="http://localhost:3000/about">about</a>`);
    // console.log(req.rawHeaders);
});

app.get("/menu", (req, res) => {
    res.send("<h1>welcome to menu</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>welcome to about</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});