import { User } from "./models/user";


//this is going to be our "database"
//its entire purpose is to hold the initial state of our data
export let users: User[] = [{

    userId: 1,
        username: "Finance Manager",
        password: "password",
        firstName: "",
        lastName: "",
        email: "",
    role: {
        roleId: 1,
        role: "Finance Manager",
    }

},
{

    userId: 2,
        username: "Admin",
        password: "password",
        firstName: "",
        lastName: "",
        email: "",
    role: {
        roleId: 1,
        role: "Admin",
    }

},
{

    userId: 3,
        username: "User",
        password: "password",
        firstName: "",
        lastName: "",
        email: "",
    role: {
        roleId: 1,
        role: "User",
    }

}]

 