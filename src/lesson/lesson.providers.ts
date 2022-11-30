import constants from '../constants';
import { DataSource } from 'typeorm';
import { Lesson } from './lesson.entity';

export const lessonProviders = [
  {
    provide: constants.LESSON_REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      const lessonRepository = dataSource.getRepository(Lesson);
      return lessonRepository.extend({});
    },
    inject: [constants.DATA_SOURCE],
  },
];
