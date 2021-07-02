const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

const run = () => {
    const server = app.listen(3000, ()=> console.log("service run success"))
    return server;
}

module.exports = run;