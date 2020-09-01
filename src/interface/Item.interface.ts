import { Timestamp } from "typeorm";

export interface ItemInterface {
    id: number,
    name: string,
    stock: number,
    price: number,
    created_timestamp?: Timestamp,
    updated_timestamp?: Timestamp
}