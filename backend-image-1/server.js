const express = require('express')
const bodyParser =require('body-parser')
const db=require('./db')

const app =express()
app.use(bodyParser.json())
app.post('/user/register',(request,response)=>{
    const{FirstName,LastName,email,password}=request.body
    const statement =`insert into user(FirstName,LastName,email,password)
    values('${FirstName}','${LastName}','${email}','${password}')`
    db.query(statement,(error,result)=>{
        if(error)
        {
            response.send({status:'error'})
        }
        else 
        {
            response.send({status:'success',data:result})
        }
    })
})
app.listen(4000,'0.0.0.0',()=>{
    console.log(`server started on port 4000`)
})