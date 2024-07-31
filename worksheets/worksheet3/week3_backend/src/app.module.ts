import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

const DB_URI =
  'mongodb+srv://yhkim8046:Y5QGRx9Y0gY0X5Ze@kaiako.bjeyazu.mongodb.net/?retryWrites=true&w=majority&appName=Kaiako';

@Module({
  imports: [MongooseModule.forRoot(DB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
