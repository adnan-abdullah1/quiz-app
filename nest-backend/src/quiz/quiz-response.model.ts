import * as mongoose from 'mongoose'


export const RespnseSchema = new mongoose.Schema({
    questionID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Auth',
    },
    eventName:String,
    organizerName:String,
    chosenOption:{type:String,default:null},
    result:{type:Boolean},
    correctAnswer:Boolean,

})

export interface ResponseModel extends mongoose.Document{
    eventName:String;
    organizerName:String;
    chosenOption:string;
    correctAnswer:Boolean;
    questionID:any;
    userID:any;
}