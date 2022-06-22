import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import {QuizModule} from './quiz/quiz.module'

@Module({
  // imports: [ QuizModule,
  //   MongooseModule.forRoot('mongodb://localhost:27017/quiz',{
  //     connectionName: 'quiz',
  //   }),
   
   
  // ],
  imports: [QuizModule,AdminModule,AuthModule,
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://localhost:27017/quiz',
      }),
    }),
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
