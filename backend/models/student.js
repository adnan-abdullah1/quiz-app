const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const student = new Schema({
    quizID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'quiz',
    },
    studentFirstName: String,
    studentLastName: String,
    studentRollNo: String,
    response: [{}],
    studentScore: { type: Number, default: 0 }
})
module.exports = mongoose.model('student', student)