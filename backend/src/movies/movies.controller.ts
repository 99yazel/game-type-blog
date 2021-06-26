import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMoiveDto } from './dto/create-movie.dto';
import { UpdateMoiveDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moivesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moivesService.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are search for a movie with a title maden after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number) {
    return this.moivesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMoiveDto) {
    return this.moivesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    // this.getOne(movieId);
    return this.moivesService.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMoiveDto) {
    return this.moivesService.update(movieId, updateData);
  }
}
