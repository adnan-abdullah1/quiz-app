import { HttpException, Inject, Injectable } from '@nestjs/common';
import { QuizModel } from 'src/quiz/quiz.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Response } from './response.model';
import { TeamModel } from 'src/teams/teams.model';

@Injectable()
export class ResponseService {

    constructor(@InjectModel('Response') private readonly responseModel:Model<Response>,
    @InjectModel('Quiz') private readonly quizModel:Model<QuizModel>,
    @InjectModel ('teams') private readonly teamModel:Model<TeamModel>
    ){}

    async saveResponse(quizResponse:any){
        let score:number=0;
        let {quizId,teamsId,teamId}=quizResponse
        
        let quiz=await this.quizModel.findOne({_id:quizId})
        quiz.questionBank.forEach((quizQuestion:any)=>{
            quizResponse.responses.forEach((responseQuestion:any)=>{
                if(quizQuestion.rightAnswer==responseQuestion.response &&
                    quizQuestion._id==responseQuestion.questionId
                    ){
                        score++;
                    }
            })
        })
        quizResponse.score=score;
        let  result= new this.responseModel(quizResponse)     
        result.save((err)=>{
            if(err){
                throw new HttpException(err,401)
            }
        })
    await this.quizModel.findOneAndUpdate({_id:quizId},{isQuizLive:false})

    let lenghtResponses=await this.responseModel.count({teamsId:teamsId})
    let teamsInfo=await this.teamModel.find({_id:teamsId},{teamInfo:1})
    let teamsLength=teamsInfo[0].teamInfo.length
    
    
    if(lenghtResponses==teamsLength){
        let responses=await this.responseModel.find({teamsId:teamsId})
        let scoreArr:number[]=[]
        responses.forEach((teamResponse:any)=>{
            scoreArr.push(teamResponse.score)
        })
        
        scoreArr=scoreArr.sort()
        let highestScore=scoreArr[teamsLength-1]
  
        responses.forEach(async (team:any)=>{
            if(team.score==highestScore){
                await this.quizModel.findOneAndUpdate({quizID:team.quizId},{winnerTeam:team.teamId})
            }
        })
    }
    
    }
}
