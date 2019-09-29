const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');

const app = express();
const port = 4000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const markList = [{ name: "T1", id: 1, lat: "59.955413", lng: "30.285844" }, { name: "T2", id: 2, lat: "59.965413", lng: "30.387844" }];

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => res.send("Hello World!"));
app.get('/api/marklist', (req, res) => res.json(markList));

app.post('/api/marklist', (req, res) => {
    markList.push({ name: req.body.name, id: req.body.id, lat: req.body.lat, lng: req.body.lng })
    console.log(markList)
    res.redirect("http://localhost:3200")
})

app.listen(port, () => console.log(`listening on port ${port}`));
