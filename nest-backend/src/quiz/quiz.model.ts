import * as mongoose from 'mongoose'

export const QuizSchema=new mongoose.Schema({
    organizerName: String,
    eventName: String,
    quizCreatedAt: { type: Date, default: Date.now },
    time:Number,
    noOfQuestions:Number,
    questionNo: Number,
    question: {type:String},
    options: [],
    rightAnswer: {type:String},
    isExamLive: { type: Boolean, default: false }
});

export interface QuizModel extends mongoose.Document{
  organizerName:string,
  eventName:string,
  time:Number,
  noOfQuestions:Number,
  questionNo:Number,
  quizCreatedAt:Date,
  questions:string,
  options:[],
  rightAnswer:String,
  isExamLive:Boolean
  
}