import { HttpException, Injectable } from '@nestjs/common';
import { QuizModel } from './quiz.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {ResponseModel} from './quiz-response.model'
@Injectable()
export class QuizService 
{
    constructor(@InjectModel('Quiz' ) private readonly QuizModel:Model<QuizModel>,
    @InjectModel('Response') private readonly ResponseModel:Model<ResponseModel>
     
    ){}
   async getAllQuizs(){
        // const allQuizs=await this.QuizModel.find({"isExamLive":true},{"rightAnswer":0,"options":0,"questions":0} )
        const allQuizs=await this.QuizModel.aggregate([
            {$group: {_id:{organizerName:"$organizerName",eventName:"$eventName",time:"$time"}}}
        ])
        
    
    return allQuizs
    }
    async getQuizSet(partQuiz:any){
        
       
        const quizSet=await this.QuizModel.findOne(partQuiz).limit(1).skip(partQuiz.requestedQuiz.skip)
        // if(partQuiz.respone.chosenOption){
            // if(partQuiz.response.questionID){
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
}
