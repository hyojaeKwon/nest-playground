import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateMoiveDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

// controller 뒤에 있는 부분은 url을 담당하는 것임
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  // @Get('search')
  // search(@Query('year') searchingYear: string) {
  //   return `We are searching with a movie made after : ${searchingYear}`;
  // }

  @Get('/:id')
  getOne(@Param('id') movieID: number): Movie {
    return this.moviesService.getOne(movieID);
  }

  @Post()
  create(@Body() movieData: CreateMoiveDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':/id')
  deleteMovie(@Param('id') movieID: number) {
    return this.moviesService.deleteOne(movieID);
  }

  // 모든 리소스를 업데이트 하고 싶으면 put, 일부만 업데이트 하고 싶으면 patch
  @Patch('/:id')
  path(@Param('id') movieID: number, @Body() updateData) {
    // return {
    //   updatedMovie: movieID,
    //   ...updateData,
    // };
    return this.moviesService.update(movieID, updateData);
  }
}
