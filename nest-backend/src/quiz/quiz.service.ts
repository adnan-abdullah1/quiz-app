import { HttpException, Injectable } from '@nestjs/common';
import { QuizModel } from './quiz.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {ResponseModel} from './quiz-response.model'
import { AttemptedQuizModel } from './user-attempted-quizs.model';
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



    async getQuizSet(partQuiz:any){
        
       
        const quizSet=await this.QuizModel.findOne(partQuiz).limit(1).skip(partQuiz.requestedQuiz.skip)
       
                const questionID=partQuiz.response.questionID
        if(questionID){           
          const checkAnswer= await this.QuizModel.findById(questionID)

            if(checkAnswer.rightAnswer==partQuiz.response.chosenOption){
                partQuiz.response.result=true;
          
              }
             else{
                partQuiz.response.result=false;
            }
               const response= new this.ResponseModel(partQuiz.response)
       
            response.save((err)=>{
                 if(err){
                    throw new HttpException("could not save answer ",409)
                }
            })
           
    }

    // }
    //    }
        return quizSet
    }
    async getQuizResult(userID:any,eventName:any,organizerName:any){
        let  score=0;
        const quizResult=await this.ResponseModel.find({'userId':userID,
            'eventName':eventName,'organizerName':organizerName})
            console.log(quizResult,'(((((((((((_')
        quizResult.forEach((resp:any)=>{
            console.log(resp.result,'..............')
            if(resp.result==true){

                score++;
            }
            else{
               
            }
        })
        console.log({"score":score,"total questions":quizResult.length})
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
