import express from 'express'
import cors from 'cors'
const app=express()
app.use(cors())
app.use(express.json()) 
const user=[{ 
    user:"dhruborajdey@gmail.com",
    password:"fgbd234",
    notes:[{
        id: 1,
        title: "Meeting Notes",
        content: "Discuss project deadlines...",
        date: "2025-02-02" 
    }]
}]
var ids=1;
app.post("/new",async(req,res)=>{
    let u=req.body
    console.log(u)
    let ue=user.find(item=>item.user==u.user)
    ue.notes.push({id:++ids,title:u.title,content:u.content,date:u.date})
    res.json(ue)

})

app.post("/",async(req,res)=>{
    console.log(req.body)
    let y=user.filter(item=>item.password==req.body.password)
    
    res.json(y[0])
})

app.listen(process.env.PORT||8000)