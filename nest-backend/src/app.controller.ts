import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
// import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getAllQuizs(){
    const allQuizs=await this.appService.getAllQuizs()
    return allQuizs;
  }
 
}
