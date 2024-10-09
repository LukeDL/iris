import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VisitorModule } from './visitor/visitor.module';
import { UserModule } from './user/user.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [VisitorModule, UserModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
