import * as mongoose from 'mongoose'

export const TeamSchema = new mongoose.Schema({
    teamInfo:[
       {
        teamName:{type:String},
        emails:[String],
       }
    ],
    
    quizID:{type:mongoose.Schema.Types.ObjectId,ref:'Quiz'} ,
    score:{type:Number,default:0}
});

export interface TeamModel extends mongoose.Document{
    teamInfo:[],
   quizID:any,
   score:number
}