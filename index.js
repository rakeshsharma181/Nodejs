require ('dotenv').config();
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/twitter",(req,res)=>{
 res.send("Rakesh Sharma")
})
app.get("/youtube",(req,res)=>{
    res.send('<h2>Welcome Html H2</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})