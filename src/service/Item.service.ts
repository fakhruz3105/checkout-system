import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ItemDTO } from 'src/dto/Item.dto'
import { Item } from 'src/entity/Item.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ItemService {
    constructor(
        @InjectRepository(Item)
        private itemRepository: Repository<Item>
    ) {}

    async getAllItems(): Promise<Item[]> {
        return await this.itemRepository.find()
    }

    async getItemById(id): Promise<Item> {
        if (await this.isItemPresence(id)) {
            return this.itemRepository.findOne(id)
        } else {
            throw new BadRequestException('Item not found')
        }
    }

    async saveNewItem(newItem: ItemDTO): Promise<Item> {
        if (!(await this.isItemPresence(newItem.id))) {
            return this.itemRepository.save(newItem)
        } else {
            throw new BadRequestException('Item has been saved previously.')
        }
    }

    async updateItem(item: ItemDTO): Promise<Item> {
        if (await this.isItemPresence(item.id)) {
            return this.itemRepository.save(item)
        } else {
            throw new BadRequestException('Item not found')
        }
    }

    async isItemPresence(id: string): Promise<boolean> {
        return !!(await this.itemRepository.findOne(id))
    }
}
