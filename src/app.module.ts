import { Module } from '@nestjs/common'
import 'dotenv/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'
import { MysqlConfig } from './config'

@Module({
    imports: [
        TypeOrmModule.forRoot(MysqlConfig),
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    constructor(private readonly connection: Connection) {}
}
