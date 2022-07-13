import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {TeamSchema} from './teams.model'
import { QuizSchema } from 'src/quiz/quiz.model';

@Module({
  imports:[ MongooseModule.forFeature([
    {name:'Team',schema:TeamSchema},
    {name:'Quiz',schema:QuizSchema},
  ])],
  controllers: [TeamsController],
  providers: [TeamsService]
})
export class TeamsModule {}
