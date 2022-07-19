import { Body, Controller, Get, Post,Req,Res } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('/login')
  async login(@Res() res:any,@Req() req:any){
    console.log(req.body)
   const user= await this.authService.login(req.body)
   res.status(200).json({"user":user})
  }

  @Post('/register')
  async register(@Res() res:any,@Req() req:any){
    const newUser=await this.authService.register(req.body)
  
    res.status(200).json({"newUser":newUser})
  }
  @Post('/validate')
  async validate(@Res() res:any,@Req() req:any){
    
    const isValid=await this.authService.validate(req.body)
    res.status(200).send(isValid)
  }  
}
