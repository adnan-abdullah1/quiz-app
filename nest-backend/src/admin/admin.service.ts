import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuizModel } from 'src/quiz/quiz.model';
import {AuthModel} from '../auth/auth.model'

@Injectable()
export class AdminService {
constructor(@InjectModel('Quiz') private readonly QuizModel:Model<QuizModel> ,
@InjectModel('Auth') private readonly authModel:Model<AuthModel> 
){}
addQuiz(quizData:any){
    const result = new this.QuizModel(quizData)
    result.save()
    return result;
}

async makeQuizLive(id:any){
    try{
    const result=await this.QuizModel.findOneAndUpdate({_id:id},{isQuizLive:true})
    if(!result.isQuizLive)
    {
        return 'false'
    }
    return result.isQuizLive
}
catch(err){
    throw new HttpException(err,500)
}
}

async getAllUsers(chosenSchool,chosenClass){
    console.log(chosenSchool,chosenClass)
    const allUsers=this.authModel.find({SchoolName:chosenSchool,class:chosenClass},{password:0,__v:0,isAdmin:0})
    return allUsers
}
}
