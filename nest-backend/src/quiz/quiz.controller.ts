import { Controller, Get, Res,Post, Param, Req } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) { }
 

  @Get('/all-quizs')
  async getAllQuizs(@Res() res:any) {
  
    const allQuizs = await this.quizService.getAllQuizs()
    res.json({ status: 200, data: allQuizs });
   
  }
  @Post('/quiz-set')
  async quizSet(@Req() req:any, @Res() res:any){
    const {sliceVal,_id}=req.body
    const quizSet=await this.quizService.getQuizSet(_id,sliceVal)
    
    res.json({status:200,data:quizSet })
  }
  @Get('/get-time/:id')
  async getQuizTime(@Req() req:any, @Res() res:any){
    const {id} = req.params
    const quizTime=await this.quizService.getQuizTime(id)
    res.status(200).send(quizTime)
  }
  
  @Post('/get-quiz-result')
  async getQuizResult(@Req() req:any,@Res() res:any){
    const {userID,eventName,organizerName}=req.body
    const quizResult=await this.quizService.getQuizResult(userID,eventName,organizerName)

    res.status(200).send(quizResult)
  }
 }
 
  
 


