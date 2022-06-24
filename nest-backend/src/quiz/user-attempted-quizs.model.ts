import * as mongoose from 'mongoose';
export const AttemptedQuizSchema=new mongoose.Schema({
    
    userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Auth',
        },
        organizerName: String,
        eventName: String,
        scored:String,
        totalQuestions:String
    
})

export interface AttemptedQuizModel {
    userID:any;
    organizerName: String;
    eventName: String;
    scored:String;
    totalQuestions:String;
}