import * as mongoose from 'mongoose'
export const AuthSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:String,
    email:String,
    password:String,
    schoolName:String,
    class:String,
    isAdmin:{type:Boolean,default:false}
    
})

export interface AuthModel extends mongoose.Document{
    firsName:string,
    lastName:string,
    email:string,
    password:string,
    SchoolName:string,
    class:string,
    isAdmin:Boolean

}