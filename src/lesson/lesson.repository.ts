import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';

export interface LessonRepository extends Repository<Lesson> {
  createLesson: () => Promise<Lesson>;
}
