import { Controller, Get, Res,Post, Param, Req } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) { }
 

  @Get('/all-quizs')
  async getAllQuizs(@Res() res:any) {
  
    const allQuizs = await this.quizService.getAllQuizs()
    res.json({ status: 200, data: allQuizs });
    // return allQuizs
  }
  @Post('/quiz-set')
  async quizSet(@Req() req:any,
    @Res() res:any){
      
    console.log(req.body,'req params:::::::: ')
    const quizSet=await this.quizService.getQuizSet(req.body)
    
    res.json({status:200,data:quizSet })
  }
  
  @Post('/get-quiz-result')
  async getQuizResult(@Req() req:any,@Res() res:any){
    const {userID,eventName,organizerName}=req.body
    const quizResult=await this.quizService.getQuizResult(userID,eventName,organizerName)

    res.status(200).send(quizResult)
  }
 }
 
  
 


