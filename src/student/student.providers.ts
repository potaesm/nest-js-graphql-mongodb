import constants from '../constants';
import { DataSource } from 'typeorm';
import { Student } from './student.entity';

export const studentProviders = [
  {
    provide: constants.STUDENT_REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      const studentRepository = dataSource.getRepository(Student);
      return studentRepository.extend({});
    },
    inject: [constants.DATA_SOURCE],
  },
];
