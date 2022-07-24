import { HttpException, Inject, Injectable } from '@nestjs/common';
import { QuizModel } from 'src/quiz/quiz.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Response } from './response.model';
import { TeamModel } from 'src/teams/teams.model';

@Injectable()
export class ResponseService {

    constructor(@InjectModel('Response') private readonly responseModel:Model<Response>,
    @InjectModel('QuizModel') private readonly quizModel:Model<QuizModel>,
    @InjectModel ('TeamModel') private readonly teamModel:Model<TeamModel>
    ){}

    async saveResponse(data:any){
    
        const {quizId,teamsId,teamId}= data;
        let score=0;
       console.log('quizidd in back end',quizId)
            const saveResponse= await new  this.responseModel(data)
             saveResponse.save((err:any)=>{
                if(err){
                    throw new HttpException('Somthing went wrong while saving your response',409)
                }
            })
           
           

             const correspondingQuiz = await this.quizModel.find({_id:quizId})
                    console.log('questionBank',correspondingQuiz)
                    return
             correspondingQuiz[0].questionBank.forEach((element:any,i)=>{
                if(element.rightAnswer==saveResponse.responses[i].response)
                    score++;
             })

        
             const teamsScore= await this.teamModel.updateOne({'teamInfo._id':teamId},{'$set':{
                'teamInfo.$.score':score
             }})



                
            //    await  this.quizModel.findOneAndUpdate({_id:quizId},{$set:{
            //         played:true,
            //     }})           
                
                
                const winner= await this.teamModel.aggregate(
                    [
                    { "$unwind": "$teamInfo"},
                    { "$group": {
                        "_id": { 
                            "teamsId": "$_id",
                            "teamName": "$teamInfo.teamName",
                        "teamScore":"$teamInfo.score",
                        }, 
                    }},
                 {$sort:{"_id.teamScore":-1}},
                 {$limit:1}
                ]
                 )
                 console.log('winner ',winner)
               const teamWins = await this.quizModel.findOneAndUpdate({_id:quizId},{$set:{
                winnerTeam:winner[0]._id.teamName
               }})
              
        
            return winner
            
    }
}
