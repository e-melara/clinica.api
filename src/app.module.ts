import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';

// modules
import { AuthModule } from './auth/auth.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { CustomModule } from './custom/custom.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      synchronize: false,
      autoLoadEntities: true,
      ssl: true,
      logging: true,
      migrationsRun: false,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    AuthModule,
    CustomModule,
    PacientesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
