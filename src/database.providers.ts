import { ConfigService } from '@nestjs/config';
import constants from './constants';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    inject: [ConfigService],
    provide: constants.DATA_SOURCE,
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mongodb',
        url: configService.get('DB_URL'),
        useUnifiedTopology: true,
        entities: [__dirname + '/*/*.entity{.ts,.js}'],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
