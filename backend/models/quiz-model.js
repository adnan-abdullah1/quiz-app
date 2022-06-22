const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const quiz = new Schema({
    organizerName: String,
    eventName: String,
    quizCreatedAt: { type: Date, default: Date.now },
    questionNo: Number,
    questions: [{ type: String }],
    options: [{}],
    rightAnswer: [{}],
    isExamLive: { type: Boolean, default: false }


})
module.exports = mongoose.model('quiz', quiz)