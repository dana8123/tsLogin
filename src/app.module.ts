import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '1234',
      port: 3306,
      database: 'tslogin',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    PhotoModule,
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
