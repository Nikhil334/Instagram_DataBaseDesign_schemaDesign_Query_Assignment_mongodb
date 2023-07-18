import { User } from "../models/user.schema";

const  createUsers = async ()=>{

    const userdata = new User({
       username:"Harshit Pratap",
       email:"harshit@gmail.com",
       password:"Harshit321",
       profilePicture:"https://image12.com",
       no_of_posts:44,
       no_of_followers:540,
       no_of_followings:220
    })
    const result = await userdata.save(); 
    console.log(result);
}
export {createUsers};