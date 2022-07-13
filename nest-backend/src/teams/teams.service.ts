import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {TeamModel} from './teams.model'
import {QuizModel} from '../quiz/quiz.model'
@Injectable()
export class TeamsService {
    constructor(@InjectModel('Team')  private readonly teamModel:Model<TeamModel>,
    @InjectModel('Quiz')  private readonly quizModel:Model<QuizModel>
    ){}
     addTeam(teamData){
        const addedTeam= new this.teamModel(teamData)
    addedTeam.save((err)=>{
            if(err){
                throw new HttpException(err,409)
            }
        })
         return addedTeam;
    }
    
      async allowParticpate(data:any){
        const {teamName,email,quizID}=data;
    
        let teams= await this.teamModel.find({quizID:quizID},{_id:0,__v:0,score:0,quizID:0})
       
        const teamExists=teams.length < 1 ? false:true
        if(!teamExists){
            throw new HttpException("team name doesnt exist ",409)
        }
        let teamsArr:any=teams[0].teamInfo
        let userExists=false
        let emailExists=false
        teamsArr.forEach((team:any)=>{
            
            if(team.teamName==teamName) {
                emailExists= team.emails.some((Email:any)=>Email==email)
                userExists=true
            }
        })
        if(!userExists){
            throw new HttpException("team not exists ",409)
        }
        if(!emailExists){
            throw new HttpException("user is not registered",409)
        }
      
        const quiz=await this.quizModel.find({quizID:quizID,isExamLive:true},{isExamLive:1})
      
        if(quiz.length < 1)
        {
            throw new HttpException("quiz is not live",409)
        }
        return {"isQuizLive":true}
    }

}
