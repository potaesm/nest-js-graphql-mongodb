import { Module } from '@nestjs/common';
import { StudentModule } from 'src/student/student.module';
import { DatabaseModule } from '../database.module';
import { lessonProviders } from './lesson.providers';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';

@Module({
  imports: [DatabaseModule, StudentModule],
  providers: [...lessonProviders, LessonResolver, LessonService],
})
export class LessonModule {}
