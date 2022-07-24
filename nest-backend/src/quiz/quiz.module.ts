import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { QuizController } from "./quiz.controller";
import { QuizSchema } from "./quiz.model";
import { QuizService } from "./quiz.service";
import { ResponseSchema } from "src/response/response.model";

@Module({
    imports:[
        MongooseModule.forFeature([
          {name:'Quiz',schema:QuizSchema},
          {name:'Response',schema:ResponseSchema},
        ]),

],
    controllers:[QuizController],
    providers:[QuizService]
})
export class QuizModule{}