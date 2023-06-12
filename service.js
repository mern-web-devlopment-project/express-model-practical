const express = require('express')
const Services = [{
  name:'website',
  cost:'1000',
  duration:'2-months'
},
{
  name:'App',
  cost:'5000',
  duration:'3-months'
},
{
  name:'Marketing',
  cost:'10000',
  duration:'1-months'
},
{
  name:'Typing',
  cost:'500',
  duration:'4-months'
}
]
const router = express.Router()
router.get('/',(req,res)=>{
  res.send("Working hiii")
})
router.get('/:id',(req,res)=>{
  if(req.params.id<Services.length){
    res.status(200).json(req.service)
  }
  res.status(404).json({message:'Service Not Found'})
})

router.param('id',(req,res,next,id)=>
{
  
  req.service = Services[id]
  next()
})
module.exports = router