import express from 'express'
import { authorization } from '../middleware.ts/auth-middleware'
import * as userServices from '../services/user-services'



export const userRouter = express.Router()


async function controllerGetUsers(req, res){
    let users = await userServices.getUsers()
    if(users){        
        res.json(users)
    }else{
        res.sendStatus(500)
    }

}

userRouter.get('',  [authorization([3]), controllerGetUsers])



userRouter.get('/:id', async (req,res)=>{
    let id = +req.params.id
    if(isNaN(id)){
        res.sendStatus(400).send('Invalid ID')
    }else{
        try{
            let user = await userServices.getUserById(id)
            res.json(user)
        }catch(e){
            console.log(e);
            
            res.status(e.status).send(e.message)
        }
        
    }
})


userRouter.patch('', [authorization([1])], async (req, res) => {
    try {
        const {body} = req;
        const update = await userServices.updateUser(body);
        res.status(200).json(update);
    }catch (e) {
        res.status(e.status).send(e.message);
    }
});




