import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema } from 'src/quiz/quiz.model';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:'Quiz',schema:QuizSchema}
    ])
],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
