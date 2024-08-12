import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ArticleDocument = HydratedDocument<Article>;

@Schema()
export class Article {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;  

  @Prop()
  source: string;

  @Prop()
  pubyear: string;

  @Prop()
  doi: string;

  @Prop()
  claim: string;

  @Prop()
  evidence: string; 
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
