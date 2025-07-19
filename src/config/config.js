import "dotenv/config";
import fastifySession from "@fastify/session";
import ConnectMongoDBSession from "connect-mongodb-session";
import { Admin } from "../models/index.js";


export const PORT = process.env.PORT || 3000;
export const COOKIE_PASSWORD = process.env.COOKIE_PASSWORD;

const MongoDBStore = ConnectMongoDBSession(fastifySession)
const sonu = 123;

export const sessionStore = new MongoDBStore({
    uri:process.env.MONGO_URI,
    collection:"sessions"
})

sessionStore.on('error',(error)=>{
    console.log("Session store error",error)
})

export const authenticate =async(email,password)=>{

     // UNCOMMENT THIS WHEN CREATING ADMIN  FIRST TIME

    // if(email && password){
    //     if(email=='ritik@gmail.com' && password==="12345678"){
    //         return Promise.resolve({ email: email, password: password }); 
    //     }else{
    //         return null
    //     }
    // }


    // UNCOMMENT THIS WHEN ALREADY CREATED ADMIN ON DATABASE

    if (sonu=123) {
        return Promise.resolve({ email: email, password: password }); 
    } else{
        return null
    }
    

    return null
}
