import express from 'express';

const app = express();

app.use(express.json())


app.get('/test',(req,res)=>{
return res.json({msg:"teste get"})
})

app.post('/test-post',(req,res)=>{
  return res.json({"msg":"enviando teste"})
})

app.listen(3000,()=>console.log("Server is Running"))