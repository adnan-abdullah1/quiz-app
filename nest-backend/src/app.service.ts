import { Injectable } from '@nestjs/common';
// import { QuizModel } from './quiz/quiz.model';
import { QuizModule } from './quiz/quiz.module';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  // async getAllQuizs(): Promise<any>{
   
  // }
}
