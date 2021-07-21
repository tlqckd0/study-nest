import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './cats/cats.controllers';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';
import { User } from './user/model/user.entity';
import { UserModule } from './user/user.module';


@Module({
  imports:[CatsModule,UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'tlqckdsus0-',
      database: 'monolithic',
      entities: [User],
      synchronize: false,
      logging:"all"
    })
  ]
})
export class AppModule implements NestModule {
  configure(consumer:MiddlewareConsumer){
    consumer
    .apply(LoggerMiddleware)
    .forRoutes(CatsController);
  }
}
