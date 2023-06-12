const express = require('express')
const app = express()
const servicePage = require('./service')
const PORT = 3500
app.get('/',(req,res)=>{
  res.send("Working")
})

app.use('/service',servicePage)
app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))