import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeORMConfig } from 'typeorm.config'

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
