const express = require("express");
const handle = require("express-handlebars");

var app = express();

var port = 3000;

app.engine("handlebars", handle({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var iceCreams = [
    { name: 'vanilla', price: 10, awesomeness: 3 },
    { name: 'chocolate', price: 4, awesomeness: 8 },
    { name: 'banana', price: 1, awesomeness: 1 },
    { name: 'greentea', price: 5, awesomeness: 7 },
    { name: 'jawbreakers', price: 6, awesomeness: 2 },
];

const name = req.paramas.name;
let result;
app.get("/icecream/:name", function(req, res) {
    for(var i = 0; i <iceCreams.length; i +=1) {
        if(iceCreams[i].name === req.params.name) {return res.render("icecream", iceCreams[i])}
    }
});

