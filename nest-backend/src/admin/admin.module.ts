import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuizSchema } from 'src/quiz/quiz.model';
import { AuthSchema } from 'src/auth/auth.model';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:'Quiz',schema:QuizSchema},
      {name:'Auth',schema:AuthSchema}
    ])
],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
