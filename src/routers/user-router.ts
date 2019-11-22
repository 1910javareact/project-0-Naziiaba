import express from 'express'
import { User } from '../models/user'
import { authorization } from '../middleware.ts/auth-middleware'
import { getAllUsers, getUserById } from '../services/user-services'



export const userRouter = express.Router()


//an example of not using arrow functions
function controllerGetUsers(req, res){
    let users = getAllUsers()//this function is in services
    if(users){        //its purpose is to process getting all gardens
        res.json(users)
    }else{
        res.sendStatus(500)
    }

}
userRouter.get('', [ authorization([1]), controllerGetUsers ])



userRouter.get('/:id', (req,res)=>{
    let id = +req.params.id//from req.params, give me id
    if(isNaN(id)){
        res.sendStatus(400)
    }else{
        try{
            let user = getUserById(id)
            res.json(user)
        }catch(e){
            res.status(e.status).send(e.message)
        }
        
    }
})

userRouter.patch('', authorization([2]) )