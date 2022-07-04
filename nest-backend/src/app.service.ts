import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {QuizModel} from './quiz/quiz.model'

@Injectable()
export class AppService {
  constructor(@InjectModel('Quiz') private readonly QuizModel:Model<QuizModel>){}
 async getAllQuizs(){
    const project1={time:1}
    const allQuizs=await this.QuizModel.find({},{questionBank:0})
    return allQuizs;
 }
  // async getAllQuizs(): Promise<any>{
   
  // }
}
