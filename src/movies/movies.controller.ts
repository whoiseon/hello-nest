import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from 'src/movies/movies.service';
import { Movie } from 'src/movies/entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('/')
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/search')
  search(@Query('year') year: string) {
    return `We are searching for a movie with a title: ${year}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }
}
