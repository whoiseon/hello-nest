import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from 'src/app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
