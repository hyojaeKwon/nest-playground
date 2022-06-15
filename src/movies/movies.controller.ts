import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

// controller 뒤에 있는 부분은 url을 담당하는 것임
@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieID: string) {
    return `This will return one movie with the id: ${movieID}`;
  }

  @Post()
  create() {
    return `this will create a movie`;
  }

  @Delete(':/id')
  deleteMovie(@Param('id') movieID: string) {
    return `this will delete a movie with the id: ${movieID}`;
  }

  // 모든 리소스를 업데이트 하고 싶으면 put, 일부만 업데이트 하고 싶으면 patch
  @Patch('/:id')
  path(@Param('id') movieID: string) {
    return `This will delete a movie with the id : ${movieID}`;
  }
}
