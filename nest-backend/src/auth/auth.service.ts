import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {TeamModel} from '../teams/teams.model'
import {AuthModel} from './auth.model'
import {QuizModel} from '../quiz/quiz.model'
const bcrypt = require('bcrypt')
@Injectable()
export class AuthService {
    constructor(@InjectModel('Auth') private readonly AuthModel:Model<AuthModel>,
    @InjectModel('Team')  private readonly teamModel:Model<TeamModel>,
    @InjectModel('Quiz')  private readonly QuizModel:Model<QuizModel>

    ){}
 
    async  login(loginData:any){
        if(!(loginData.email || loginData.password)){
            throw new HttpException("enter both email and password ",409)
        }
       const user=await this.AuthModel.findOne({"email":loginData.email})
     
        if(!user){
            throw  new HttpException("email not found ",409)
        }   
        
        const validPassword=await this.AuthModel.findOne({"email":loginData.email,"password":loginData.password},{password:0})
       
        // const validPassword = await bcrypt.compare(loginData.password, user.password);
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


    async validate(authModel:any){
      
        let emailExists;
        const {quizID,teamName,email,password}=authModel
        const loginData={email:email,password:password}
        
        try{
         await this.login(loginData)
        //now validate if email exists on given team name
    
        const teams= await this.teamModel.findOne({quizID:quizID},{teamInfo:1})
        
        if(!teams){
            throw new HttpException('quiz id not found in teams',409)
        }
        
        emailExists= teams.teamInfo.find((emailsObj:any)=>
            emailsObj.emails.find((emaiL:any)=>emaiL==email)  &&
            emailsObj.teamName===teamName
            
        )
       
        if(!emailExists){

            throw new HttpException('Email doesnt belong to team',409)
        }
        let isQuizLive = await this.QuizModel.findOne({_id:quizID},{isQuizLive:1,_id:0})
        if(!isQuizLive.isQuizLive){
            throw new HttpException('Quiz is not live',401)
        }
        return {'quizID':quizID,'teamId':emailExists._id}
        }
        catch(err){
            throw new HttpException(err,409)
        }
    }

}
