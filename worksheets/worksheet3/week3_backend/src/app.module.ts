import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './api/books/modules/book.module';
import { ConfigModule } from '@nestjs/config';
import { Book, BookSchema } from './api/books/book.schema';

const DB_URI =
  'mongodb+srv://yhkim8046:Y5QGRx9Y0gY0X5Ze@kaiako.bjeyazu.mongodb.net/?retryWrites=true&w=majority&appName=Kaiako';

@Module({
  imports: [
    MongooseModule.forRoot(DB_URI),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    BookModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
