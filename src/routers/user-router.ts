import express from 'express'
import { authorization } from '../middleware.ts/auth-middleware'
import { getAllUsers, getUserById, updateUser } from '../services/user-services'



export const userRouter = express.Router()



async function controllerGetUsers(req, res){
    let users = await getAllUsers()
    if(users){        
        res.json(users)
    }else{
        res.sendStatus(500)
    }

}

userRouter.get('', [ authorization([1]), controllerGetUsers ])



userRouter.get('/:id', async (req,res)=>{
    let id = +req.params.id
    if(isNaN(id)){
        res.sendStatus(400)
    }else{
        try{
            let user = await getUserById(id)
            res.json(user)
        }catch(e){
            res.status(e.status).send(e.message)
        }
        
    }
})

userRouter.patch('', [authorization([2])], async (req, res) => {
    try {
        const {body} = req;
        const update = await updateUser(body);
        res.status(200).json(update);
    }catch (e) {
        res.status(e.status).send(e.message);
    }
});
