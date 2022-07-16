import { Controller ,Post,Res,Req,Put,Get} from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
 
  @Post('/add-quiz')
  async getAllQuizs(@Res() res,@Req() req:any
  ) {
    
    const addedQuiz = await this.adminService.addQuiz(req.body)
    res.json({ status: 200, data: addedQuiz });
    // return allQuizs
  }

  @Put('/make-quiz-live/:quizID')
  async makeQuizLive(@Res() res:any,@Req() req:any){
   
    const result=await this.adminService.makeQuizLive(req.params.quizID)
    res.json({'quizMadeLive':result})
  }

  @Get('/all-users/:chosenSchool/:chosenClass')
  async getAllUsers(@Res() res:any,@Req() req:any){
    const {chosenSchool,chosenClass}=req.params
    const allUsers=await this.adminService.getAllUsers(chosenSchool,chosenClass)
    res.status(200).json({users:allUsers})
  }
}
