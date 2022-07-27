import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { MongooseModule } from '@nestjs/mongoose';{}

import { QuizSchema } from 'src/quiz/quiz.model';
import { TeamSchema } from 'src/teams/teams.model';
import { ResponseSchema } from './response.model';


@Module({
  imports:[MongooseModule.forFeature([{name:'Response',schema:ResponseSchema},
  {name:'Quiz',schema:QuizSchema},
  {name:'teams',schema:TeamSchema}])],
  
  controllers: [ResponseController],
  providers: [ResponseService]
})
export class ResponseModule {}
