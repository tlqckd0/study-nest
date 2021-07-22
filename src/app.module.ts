import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CatsController } from './cats/cats.controllers';
import { CatsModule } from './cats/cats.module';
import { LoggerMiddleware } from './logger.middleware';
import { Relation } from './relation/model/relation.entity';
import { RelationModel } from './relation/relation.module';
import { User } from './user/model/user.entity';
import { UserModule } from './user/user.module';


@Module({
  imports:[CatsModule,UserModule,RelationModel,AuthModule,
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:['.env']
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PWD,
      database: process.env.DATABASE_DB,
      entities: [User,Relation],
      synchronize: false,
      logging:"all"
    })
  ],
  controllers:[AppController],
  providers:[AppService]
})
export class AppModule implements NestModule {
  configure(consumer:MiddlewareConsumer){
    consumer
    .apply(LoggerMiddleware)
    .forRoutes(CatsController);
  }
}
