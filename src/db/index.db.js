import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"


//ConnectDb will return a promise object that we will export and than use to connect to the MongoDB server by importing it in the index.js file 
const ConnectDB = async()=>{

   try {
    
    const connectionInstance = await mongoose.connect(`${process.env.MongoDB_URI}/${DB_NAME}`)
    
    
    console.log(`\n MongooDB connected!! DB HOST : ${connectionInstance.connection.host}`)
    
   } catch (error) {
    
    console.log("MongoDb Connection Error", error)
   } 
}

export default ConnectDB