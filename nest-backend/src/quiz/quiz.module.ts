import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { QuizController } from "./quiz.controller";
import { QuizSchema } from "./quiz.model";
import { QuizService } from "./quiz.service";

@Module({
    imports:[
        MongooseModule.forFeature([
          {name:'Quiz',schema:QuizSchema}
        ])
],
    controllers:[QuizController],
    providers:[QuizService]
})
export class QuizModule{}