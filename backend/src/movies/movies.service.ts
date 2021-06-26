import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMoiveDto } from './dto/create-movie.dto';
import { UpdateMoiveDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    // 원래는 진짜 데이터베이스가 온다.
    return this.movies;
  }

  getOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with Id ${id} not Found.`);
    }
    return movie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  create(movieData: CreateMoiveDto) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  update(id: number, updateData: UpdateMoiveDto) {
    // updateData 유효성 검사 필요
    const movie = this.getOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
