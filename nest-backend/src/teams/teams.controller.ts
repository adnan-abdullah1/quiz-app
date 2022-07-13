import { Controller, Post, Req, Res } from '@nestjs/common';
import { TeamsService} from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}
 
  @Post('/add-team')
  addTeam(@Res() res:any,@Req() req:any){
  const temaData=req.body
  const addedTeam = this.teamsService.addTeam(temaData)
  
  return res.json({"TeamData":addedTeam});
}
@Post('/participate')
async allowParticipate(@Res() res:any,@Req() req:any){

  const allowed= await this.teamsService.allowParticpate(req.body)
  res.json({"allowed":allowed})
}
}
