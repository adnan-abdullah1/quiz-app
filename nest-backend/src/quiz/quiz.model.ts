import * as mongoose from 'mongoose'

export const QuizSchema=new mongoose.Schema({
    organizerName: String,
    eventName: String,
    quizCreatedAt: { type: Date, default: Date.now },
    time:Number,
    noOfQuestions:Number,
    questionNo: Number,
    questionBank: [
      {
      questionType:{type:String},
      question:{type:String},
      rightAnswer:{type:String},
      options:[String]
      },],
   
    isExamLive: { type: Boolean, default: false }
});

export interface QuizModel extends mongoose.Document{
  organizerName:string,
  eventName:string,
  time:Number,
  noOfQuestions:Number,
  quizCreatedAt:Date,
  questionBank:[],
  isExamLive:Boolean
  
}