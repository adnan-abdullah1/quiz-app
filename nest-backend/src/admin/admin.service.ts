import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuizSchema } from 'src/quiz/quiz.model';
import { QuizModel } from 'src/quiz/quiz.model';
@Injectable()
export class AdminService {
constructor(@InjectModel('Quiz') private readonly QuizModel:Model<QuizModel> ){}
async addQuiz(quizData:any){
    const result=await new this.QuizModel(quizData)
    result.save()
    return result;
}
}
