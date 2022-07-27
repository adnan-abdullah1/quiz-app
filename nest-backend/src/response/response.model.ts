import * as mongoose from 'mongoose'


export const ResponseSchema = new mongoose.Schema({
teamsId:{type:String},
teamId:{type:String},
responses:[{
    response:{type:String},
   questionId:{type:String},

}],
score:{type:Number,default:0},
quizId:{type:String}
  
})


export interface Response extends mongoose.Document{
    teamsId:string;
    teamId:String;
    responses:[{
        response:string,
       questionId:string,
    
    }]
}