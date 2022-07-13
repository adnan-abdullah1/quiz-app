import { HttpException, Injectable } from '@nestjs/common';
import { QuizModel } from './quiz.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {ResponseModel} from './quiz-response.model'
import { AttemptedQuizModel } from './user-attempted-quizs.model';
import { time } from 'console';
@Injectable()
export class QuizService 
{
    constructor(@InjectModel('Quiz' ) private readonly QuizModel:Model<QuizModel>,
    @InjectModel('Response') private readonly ResponseModel:Model<ResponseModel>,
    @InjectModel('Attempted-Quizs') private readonly AttemptedQuizModel:Model<AttemptedQuizModel>
     
    ){}
   async getAllQuizs(){
       
        const allQuizs=await this.QuizModel.aggregate([
            {$group: {_id:{organizerName:"$organizerName",eventName:"$eventName",time:"$time", noOfQuestions:"$noOfQuestions"}}}
        ])
        
    
    return allQuizs
    }



     async getQuizSet(id:any,sliceVal:number){
      
        const quizQuestions=await this.QuizModel.find({_id:id},{questionBank:1})
        let questions = quizQuestions[0].questionBank
        let question = questions.slice(sliceVal,sliceVal+1)
        return question
    }

    async getQuizTime(id:any){
        const quizTime=await this.QuizModel.find({_id:id},{time:1,_id:0})
        return quizTime[0];
    }




    async getQuizResult(userID:any,eventName:any,organizerName:any){
        let  score=0;
        const quizResult=await this.ResponseModel.find({'userId':userID,
            'eventName':eventName,'organizerName':organizerName})
           
        quizResult.forEach((resp:any)=>{
          
            if(resp.result==true){

                score++;
            }
            else{
               
            }
        })
       
         // save attempted quiz Response in attempted Quiz schema
            //so user cant again take quiz
            const attemptedQuiz={
                "userID":userID,
                "eventName":eventName,
                "organizerName":organizerName,
                "scored":score,
                "totalQuestions":quizResult.length

            }
        let attemptedQuizResponse= new this.AttemptedQuizModel(attemptedQuiz)
        attemptedQuizResponse.save((err)=>{
            if(err){
                throw new HttpException("unable to save data in Attemped quiz schema",409)
            }
        })
        
        return {"score":score,"totalQuestions":quizResult.length}
    }
}
