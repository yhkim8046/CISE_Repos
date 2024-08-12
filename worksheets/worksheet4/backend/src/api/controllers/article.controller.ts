import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticleService } from '../services/articleService';
import { CreateArticleDto } from '../dto/createArticle.dto';
import { error } from 'console';

@Controller('api/articles')
export class ArticleController{
  constructor(private readonly articleService: ArticleService){}

  @Get('/test')
  test() {
    return this.articleService.test();
  }

  // Get all articles
  @Get('/')
  async findAll() {
    try {
      return this.articleService.findAll();
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No articles found',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }

   // Get one book via id
   @Get('/:id')
   async findOne(@Param('id') id: string) {
     try {
       return this.articleService.findOne(id);
     } catch {
       throw new HttpException(
         {
           status: HttpStatus.NOT_FOUND,
           error: 'No Articles found',
         },
         HttpStatus.NOT_FOUND,
         { cause: error },
       );
     }
   }
   // Create/add an article
   @Post('/')
   async addArticle(@Body() createArticleDto: CreateArticleDto) {
     try {
       await this.articleService.create(createArticleDto);
       return { message: 'Article added successfully' };
     } catch {
       throw new HttpException(
         {
           status: HttpStatus.BAD_REQUEST,
           error: 'Unable to add this article',
         },
         HttpStatus.BAD_REQUEST,
         { cause: error },
       );
     }
   }
 
   // Update a article
   @Put('/:id')
   async updateArticle(
     @Param('id') id: string,
     @Body() createArticleDto: CreateArticleDto,
   ) {
     try {
       await this.articleService.update(id, createArticleDto);
       return { message: 'Article updated successfully' };
     } catch {
       throw new HttpException(
         {
           status: HttpStatus.BAD_REQUEST,
           error: 'Unable to update this Article',
         },
         HttpStatus.BAD_REQUEST,
         { cause: error },
       );
     }
   }
 
   //delete Article
   async deleteArticle(@Param('id') id: string) {
    try {
      return await this.articleService.delete(id);
    } catch {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'No such an Article',
        },
        HttpStatus.NOT_FOUND,
        { cause: error },
      );
    }
  }
  
} 