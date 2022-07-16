import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './auth.model';

import { TeamSchema } from 'src/teams/teams.model';

@Module({
  imports:[
  
    MongooseModule.forFeature([
      {name:'Auth',schema:AuthSchema},
      {name:'Team',schema:TeamSchema},
     
    ])
],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
