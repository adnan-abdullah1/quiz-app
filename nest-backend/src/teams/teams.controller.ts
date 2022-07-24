import { Controller, Get, Post, Req, Res } from '@nestjs/common';
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

@Get('/all-schools')
async getAllSchools(@Res() res:any, @Req() req:any){
  console.log('hello')
    const allSchools=await this.teamsService.getAllSchools()
    res.status(200).send(allSchools)
}
 @Get('/all-class/:schoolName')
 async getAllClass(@Res() res:any,@Req() req:any){
    let {schoolName}=req.params
    const allClass=await this.teamsService.getAllClass(schoolName)
    res.status(200).send(allClass)
 }

 @Post('teams-info')
 async findTeams(
  @Req() req:any
 )
 {
  const teamData = await this.teamsService.findteams(req.body)
  return teamData
 }


 @Post('team-info')
 async findTeam(
  @Req() req:any
 )
 {
  const teamData = await this.teamsService.findteam(req.body)
  return teamData
 }


}
