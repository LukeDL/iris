import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitorModule } from './visitor/visitor.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [VisitorModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
