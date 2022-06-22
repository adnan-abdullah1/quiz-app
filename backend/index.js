const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const quiz = require('./models/quiz-model')
const Student = require('./models/student')

port = 3000;
app.use(cors({
    'origin': '*',
}))


app.use(express.json())
mongoose.connect('mongodb://localhost:27017/quiz')
    .then(() => console.log('connected Db organizers'))
    .catch(console.error)
    // mongoose.connect('mongodb://localhost:27017/student')
    //     .then(() => console.log('connected Db organizers'))
    //     .catch(console.error)


let examID;
app.post('/api/admin/add-quiz', (req, res) => {
    console.log(req.body)
    const quizData = new quiz(req.body)
    quizData.save((err, doc) => {
        if (err) {
            res.json(err)
        } else {
            examID = quizData._id
            console.log('exma id is &&&& ', examID)

            res.status(200).send(doc)

        }
    })

})
app.post('/api/student/take-exam', (req, res) => {
    req.body.quizID = examID
    console.log("exam id is", req.body)
    const quizResponse = new Student(req.body)
    quizResponse.save((err, doc) => {
        if (err) {
            res.json(err)
        } else {
            // res.status(200).send(doc)
            //evaluate response

            const studentResponse = Student.find({}, (err, doc) => {
                if (err) {
                    return res.status(400).send(err)
                } else {

                    return res.status(200).send(doc)
                }

            })


            // const questionSetId = studentResponse.quizID
            // const questionSet = quiz.find({ _id: questionSetId })
            // console.log(studentResponse, questionSet)

        }
    })
})

app.get('/api/get-quizs', (req, res) => {
    quiz.find({}, { "rightAnswer": 0 }, (err, doc) => {
        if (err) {
            res.json(err)
        } else {
            res.status(200).send(doc)
        }
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})