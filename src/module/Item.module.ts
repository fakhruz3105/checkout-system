import { Module } from '@nestjs/common'
import { ItemController } from 'src/controller/Item.controller'
import { ItemService } from 'src/service/Item.service'
import { Item } from 'src/entity/Item.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [TypeOrmModule.forFeature([Item])],
    controllers: [ItemController],
    providers: [ItemService],
})
export class ItemModule {}
