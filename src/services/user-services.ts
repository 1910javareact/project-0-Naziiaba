import { User } from "../models/user";
import { daoGetUserByUsernameAndPassword, daoGetAllUsers, daoGetUserById } from "../repositories/user-dao";


export function getUserByUsernameAndPassword(username:string, password:string){
    //if this was for real
    //we should be hashing and salting the password here
    //but our api is wildly unsecure, so don't worry about
    return daoGetUserByUsernameAndPassword(username, password)
}

export function getAllUsers():User[] {
    // here comes functionality
    return daoGetAllUsers()
}

export function getUserById(id:number):User{
    console.log("Service: you are searching for a user " + id);
    
    return daoGetUserById(id)
}