import { Injectable } from '@nestjs/common';
import { QuizModel } from './quiz.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class QuizService 
{
    constructor(@InjectModel('Quiz') private readonly QuizModel:Model<QuizModel>){}
   async getAllQuizs(){
        // const allQuizs=await this.QuizModel.find({"isExamLive":true},{"rightAnswer":0,"options":0,"questions":0} )
        const allQuizs=await this.QuizModel.aggregate([
            {$group: {_id:{organizerName:"$organizerName",eventName:"$eventName",time:"$time"}}}
        ])
        
    
    return allQuizs
    }
    async getQuizSet(partQuiz:any){
        
        console.log('444444444444444 ',partQuiz)
        const quizSet=await this.QuizModel.findOne(partQuiz).limit(1).skip(partQuiz.skip)
        console.log(quizSet,'*********')
        return quizSet
    }
}
