import * as mongoose from 'mongoose'

export const TeamSchema = new mongoose.Schema({
    teamInfo:[
       {
        teamName:{type:String,required:true,unique:true},
        emails:[{type:String,unique:true,required:true}],
       }
    ],
    
    quizID:{type:mongoose.Schema.Types.ObjectId,ref:'Quiz'} ,
    score:{type:Number,default:0}
});

export interface TeamModel extends mongoose.Document{
    teamInfo:[{
        teamName:{},
        emails:[]
    }],
   quizID:any,
   score:number
}