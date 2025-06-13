//?SIMPLE Node Server
const express = require('express');// import from node_modules
const cors = require('cors');// import from node_modules

const app = express();
app.use(cors()); // enable CORS for all routes

app.get("/api/product/:id", (req, res)=>{
  const product = {
    id: req.params.id,
    title: `product NOT PRERENDER title ${req.params.id}`,
    description: `product description ${req.params.id}`,
  }

  res.send(product);
})

app.listen("3000", ()=>{
  console.log("Server listening to port 3000");
})