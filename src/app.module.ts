import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeORMConfig } from 'typeorm.config'
import { UsersModule } from './users/users.module'

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
