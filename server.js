const express = require('express')
const app = express()
const jsxEngine = require("jsx-view-engine");
const pokemon = require("./modules/pokemon.js");

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

app.get('/', (req, res) => {
  res. send('Welcome to the Pokemon App!')
})





app.get("/pokemon/", (req, res) => {
  // res.send(pokemon);
  res.send(pokemon);
});






const port = 4000
app. listen(port, () => {
  console.log(`Listening port on ${port}`)
})
