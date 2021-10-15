import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return `{ origame: 'This action returns all cats' }`;
  }
}
