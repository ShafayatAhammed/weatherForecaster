const express = require('express');
const app = express();
const port = 7500;
const path = require('path');
const hbs = require('hbs')

app.set("view engine","hbs")

let imgfold = path.join(__dirname,"/img");
let jsfold = path.join(__dirname,"/js")

hbs.registerPartials(path.join(__dirname,"/views/partials"))
app.use(express.static(imgfold));
app.use(express.static(jsfold))

app.get('/', (req, res) => {
  res.render("index")
})

app.get('/weather',(req,res)=>{
  res.render("weather")
})

app.get("/about",(req,res)=>{
  res.render("about")
})

app.get("*",(req,res)=>{
  res.render("error");
  res.status(404);
})

app.listen(port, () => {
  console.log(`listening the port no ${port}`)
})