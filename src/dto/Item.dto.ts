import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { ItemInterface } from 'src/interface/Item.interface'
import { Timestamp } from 'typeorm'

export class ItemDTO implements ItemInterface {
    @IsNotEmpty()
    @IsString()
    id: number

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsNumber()
    stock: number

    @IsNotEmpty()
    @IsNumber()
    price: number
}
