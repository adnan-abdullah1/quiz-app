import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import {QuizModule} from './quiz/quiz.module'
import { QuizSchema } from './quiz/quiz.model';
import { TeamsModule } from './teams/teams.module';
import { ResponseModule } from './response/response.module';

@Module({
  
  imports: [AdminModule,AuthModule,TeamsModule,QuizModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://localhost:27017/quiz',
      }),
    }),
    MongooseModule.forFeature([
      {name:'Quiz',schema:QuizSchema}
    ]),
    TeamsModule,
    ResponseModule
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
