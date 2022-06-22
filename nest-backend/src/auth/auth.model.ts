import * as mongoose from 'mongoose'
export const AuthSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:String,
    email:String,
    password:String,
    isAdmin:{type:Boolean,default:false}
})

export interface AuthModel extends mongoose.Document{
    firsName:string,
    lastName:string,
    email:string,
    password:string,
    isAdmin:Boolean

}