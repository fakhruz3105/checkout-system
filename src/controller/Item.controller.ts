import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ItemDTO } from 'src/dto/Item.dto'
import { Item } from 'src/entity/Item.entity'
import { ItemService } from 'src/service/Item.service'

@Controller('items')
export class ItemController {
    constructor(private itemService: ItemService) {}

    @Get()
    async getAllItems(): Promise<Item[]> {
        return await this.itemService.getAllItems()
    }

    @Get(':id')
    async getItemById(@Param('id') id): Promise<Item> {
        return await this.itemService.getItemById(id)
    }

    @Post('new')
    async saveNewItem(@Body() newItem: ItemDTO): Promise<Item> {
        return await this.itemService.saveNewItem(newItem)
    }
}
