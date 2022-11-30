import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { studentProviders } from './student.providers';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
  imports: [DatabaseModule],
  providers: [...studentProviders, StudentResolver, StudentService],
  exports: [StudentService],
})
export class StudentModule {}
