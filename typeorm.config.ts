import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'pguser',
  password: 'pgpassword',
  database: 'api-nest',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
}
