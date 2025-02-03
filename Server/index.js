import express from 'express'
import cors from 'cors'
const app=express()
app.use(cors())
app.use(express.json()) 
const user={ 
    user:"raj",
    notes:[{
        id: 1,
        title: "Meeting Notes",
        content: "Discuss project deadlines...",
        date: "2025-02-02" 
    }]
}

app.post("/new",async(req,res)=>{
    console.log(req.body)
})

app.post("/",async(req,res)=>{
    res.json(user)
})

app.listen(process.env.PORT||8000)