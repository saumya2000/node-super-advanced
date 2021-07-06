/*
*CRUD - CREATE READ UPDATE DELETE
?GET - READ
*POST - CREATE
?PUT - UPDATE
!DELETE - DELETE
 */



const express=require('express')
const app=express()


app.get("/",function(req,res){

    //data coming from DB
    const persons =[
        {
            id: 1,
            name: "Scott",
            age: 45,
            skill: 'React'
        },
        {
            id: 2,
            name: "Adam",
            age: 43,
            skill: 'Angular'
        },
        {
            id: 3,
            name: "Tuan",
            age: 41,
            skill: 'C#'
        },
        {
            id: 4,
            name: "Uma",
            age: 39,
            skill: 'JavaScript'
        }
    ]

res.json({data:persons})
})

const PORT=4321

app.listen(PORT,()=>{
    console.log(`Server is listening at port ${PORT}`)
})
