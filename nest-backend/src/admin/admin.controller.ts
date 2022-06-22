import { Controller ,Post,Res,Req, Get} from '@nestjs/common';
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

}
