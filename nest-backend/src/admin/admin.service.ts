import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuizModel } from 'src/quiz/quiz.model';
@Injectable()
export class AdminService {
constructor(@InjectModel('Quiz') private readonly QuizModel:Model<QuizModel> ){}
addQuiz(quizData:any){
    const result = new this.QuizModel(quizData)
    result.save()
    return result;
}

async makeQuizLive(id:any){
    const result=await this.QuizModel.findOneAndUpdate({_id:id,isExamLive:true},(err)=>{
        if(err){
            throw new HttpException("some error at quiz id",409)
        }
    })
    if(!result.isExamLive)
    {
        return 'false'
    }
    return result.isExamLive
}

}
