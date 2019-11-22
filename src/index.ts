import express from 'express'
import bodyparser from 'body-parser'
import { userRouter } from './routers/user-router'
//import { roleRouter } from './routers/role-router'
import { getUserByUsernameAndPassword } from './services/user-services'


const app = express()  //this line builds the application from express



app.use(bodyparser.json())


app.use(sessionMiddleware)

app.post('/login', (req,res)=>{
    let {username, password} = req.body
    if(!username || !password ){
        res.status(400).send('Invalid credentials')
    }
    try{
        let user = getUserByUsernameAndPassword(username, password)
        req.session.user = user
        res.json(user)//its standard to send the logged in user info after the log in
    }catch(e){
        res.status(e.status).send(e.message)
    }
    


})

app.use('/users', userRouter)










//now we need to make the server actually run
//this means the server has to be listening for requests
app.listen(1007, ()=>{
    console.log('app has started');   
})


