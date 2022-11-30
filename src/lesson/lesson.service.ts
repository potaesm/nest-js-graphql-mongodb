import { Inject, Injectable } from '@nestjs/common';
import constants from '../constants';
import { LessonRepository } from './lesson.repository';
import { v4 as uuid } from 'uuid';
import { Lesson } from './lesson.entity';

@Injectable()
export class LessonService {
  constructor(
    @Inject(constants.LESSON_REPOSITORY)
    private lessonRepository: LessonRepository,
  ) {}
  async getLesson(id: string): Promise<Lesson> {
    return this.lessonRepository.findOneBy({ id });
  }
  async createLesson(name, startDate, endDate): Promise<Lesson> {
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });
    return this.lessonRepository.save(lesson);
  }
}
