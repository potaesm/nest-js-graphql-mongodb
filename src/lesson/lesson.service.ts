import { Inject, Injectable } from '@nestjs/common';
import constants from '../constants';
import { v4 as uuid } from 'uuid';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './lesson.input';
import { Repository } from 'typeorm';

@Injectable()
export class LessonService {
  constructor(
    @Inject(constants.LESSON_REPOSITORY)
    private lessonRepository: Repository<Lesson>,
  ) {}
  async getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOneBy({ id });
  }
  async getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }
  async createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });
    return this.lessonRepository.save(lesson);
  }
}
