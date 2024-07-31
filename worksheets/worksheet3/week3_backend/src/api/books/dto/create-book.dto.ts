import {Date} from 'mongoose';

export class CreateBookDto{
    title: string;
    isbn: string; 
    description: string; 
    published_date: Date; 
    publisher: string; 
    updated_date: Date; 
}