import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMoiveDto } from './dto/create-movie.dto';
import { UpdateMoiveDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  // 만약 데이터베이스를 연결한다면 이 자리에 쿼리가 와야함
  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`movie with id ${id} was not found`);
    }
    return movie;
    // parseInt(id) 대신에 +id 해도 됨
  }

  deleteOne(id: number): boolean {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return true;
  }

  create(movieData: CreateMoiveDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData: UpdateMoiveDto) {
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
