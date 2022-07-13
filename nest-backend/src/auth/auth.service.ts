import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {AuthModel} from './auth.model'
const bcrypt = require('bcrypt')
@Injectable()
export class AuthService {
    constructor(@InjectModel('Auth') private readonly AuthModel:Model<AuthModel>){}
 
    async  login(loginData:any){
        if(!(loginData.email || loginData.password)){
            throw new HttpException("enter both email and password ",409)
        }
       const user=await this.AuthModel.findOne({"email":loginData.email})
        if(!user){
            throw new HttpException("email not found ",409)
        }   
        
        // const user=await this.AuthModel.findOne({"email":loginData.email,"password":loginData.password})
       
        const validPassword = await bcrypt.compare(loginData.password, user.password);
        if(!validPassword){
            throw new HttpException("user not found ",409)
        }
        else{
            return user
        }
    }
     async register(registerData:any){
        if(!(registerData.email || registerData.password 
            ||registerData.firstName || registerData.lastName)){
        throw new HttpException("can send empty fields ",409)
            }
        const newUser= new this.AuthModel(registerData)
         // generate salt to hash password
        //  const salt = await bcrypt.genSalt(10);
    // now we set user password to hashed password
        //  newUser.password = await bcrypt.hash(newUser.password, salt);
        newUser.save((err)=>{
            if(err){
                throw new HttpException(err,409)
            }
        })
        return newUser
        
    }
}
