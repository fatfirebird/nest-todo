import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
        port: configService.get('POSTGRES_PORT'),
        entities: [__dirname + '/../**/*.entity.ts'],
        migrations: [__dirname + '/../migrations/**/*.{.ts, .js}'],
        cli: {
          migrationsDir: 'src/migrations',
        },
      }),
    }),
  ],
})
export class DatabaseModule {}
