import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { MoveGatway } from './move/move.gateway';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, MoveGatway],
})
export class AppModule {}
