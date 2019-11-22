

export function authorization(roleIds: number[],userId?:boolean[]){//authRoles, is our config
    
    return (req,res,next)=>{
        let isAuth = false
        //lets check for being logged in
        if(!req.session.user){
            res.status(401).send('Please Login')
            return
        }
        
        if(roleIds.includes(req.sesion.user.role.roleId)) {
            isAuth =true
        }
        if(userId){
            let id = +req.params.id
            if(!isNaN(id)){
                if(req.sesion.user.userId === id) {
                    isAuth = true
                }
            }
        }
        
        if(isAuth){
            next()
        }else{
            res.status(401).send('The incoming token has expired')
        }
    }
    
}