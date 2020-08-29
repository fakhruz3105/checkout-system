import { Module } from '@nestjs/common'
import 'dotenv/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { MysqlConfig } from './config'
import { ItemModule } from './module/Item.module'

@Module({
    imports: [TypeOrmModule.forRoot(MysqlConfig), ItemModule],
})
export class AppModule {
    constructor(private readonly connection: Connection) {}
}
