import { Controller,Post,Req } from '@nestjs/common';
import { ResponseService } from './response.service';

@Controller('response')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('save-response')
  async saveResponse(
    @Req() req:any
  ){
      const savedResponse= await this.responseService.saveResponse(req.body)
      return savedResponse
  }
}
