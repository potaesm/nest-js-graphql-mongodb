import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { lessonProviders } from './lesson.providers';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  imports: [DatabaseModule],
  providers: [...lessonProviders, LessonResolver, LessonService],
})
export class LessonModule {}
