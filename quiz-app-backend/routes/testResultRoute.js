const express = require("express");
const testResultRouter = express.Router() ;

const TestAttempt = require("../models/testAttempt") ;
const TestPapers = require("../models/testPapers") ;
const auth = require("../middlewares/auth");

testResultRouter.post("/submit" , auth,async(req,res) => {
    try  {
        const {testPaperId , answers} = req.body ;
        
        const paper = await TestPapers.findById(testPaperId) ;
        if (!paper) {
        return res.status(404).json({
            message: "Test paper not found"
        });
        }

        const questions = paper.questions ;

        let correctAnswers = 0;
        let wrongAnswers = 0;
        let unattemptedQuestions = 0;
        let score = 0;
        let totalMarks = 0 ;

        questions.forEach((question) => {
            const selected = answers[question.id];
            totalMarks = totalMarks + question.marks ;
            if (selected === undefined) {
            unattemptedQuestions++;
            }
            else if (selected === question.correctAnswer) {
            correctAnswers++;
            score += question.marks;
            }
            else {
            wrongAnswers++;
            score -= question.negativeMarks;
            }
        })

        let  attemptedQuestions = correctAnswers + wrongAnswers ;
        const totalQuestions = questions.length;

        const accuracy =
        attemptedQuestions === 0
            ? 0
            : (correctAnswers / attemptedQuestions) * 100;
        
        const percentage =
        totalMarks === 0
            ? 0
            : (score / totalMarks) * 100;


    const attempt = await TestAttempt.create({
        userId : req.user.userId ,
        testPaperId ,
        answers ,
        totalQuestions ,
        attemptedQuestions ,
        correctAnswers ,
        wrongAnswers ,
        unattemptedQuestions,
        score,
        totalMarks ,
        percentage ,
        accuracy
    })
    res.status(201).json({
        attemptId: attempt._id
    });
    }
    catch(err) {
        console.log(err);
        res.status(500).json({ message: "Error submitting test", error: err.message });
    }


})

module.exports = testResultRouter ;