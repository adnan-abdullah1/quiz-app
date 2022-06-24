import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { QuizController } from "./quiz.controller";
import { QuizSchema } from "./quiz.model";
import { QuizService } from "./quiz.service";
import { RespnseSchema } from "./quiz-response.model";
import { AttemptedQuizSchema } from "./user-attempted-quizs.model";
@Module({
    imports:[
        MongooseModule.forFeature([
          {name:'Quiz',schema:QuizSchema},
          {name:'Response',schema:RespnseSchema},
          {name:'Attempted-Quizs',schema:AttemptedQuizSchema},
        ]),

],
    controllers:[QuizController],
    providers:[QuizService]
})
export class QuizModule{}