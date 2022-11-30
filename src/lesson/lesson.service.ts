import { Inject, Injectable } from '@nestjs/common';
import constants from '../constants';
import { v4 as uuid } from 'uuid';
import { Lesson } from './lesson.entity';
import { AssignStudentsToLessonInput, CreateLessonInput } from './lesson.input';
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
    const { name, startDate, endDate, students } = createLessonInput;
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students,
    });
    return this.lessonRepository.save(lesson);
  }

  async assignStudentsToLesson(
    assignStudentsToLessonInput: AssignStudentsToLessonInput,
  ): Promise<Lesson> {
    const { lessonId, studentIds } = assignStudentsToLessonInput;
    const lesson = await this.lessonRepository.findOneBy({ id: lessonId });
    lesson.students = [...lesson.students, ...studentIds];
    return this.lessonRepository.save(lesson);
  }
}
