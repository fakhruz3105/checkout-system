import { ItemInterface } from "src/interface/Item.interface";
import { Column, CreateDateColumn, Entity, PrimaryColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity()
export class Item implements ItemInterface {
    @PrimaryColumn({ type: 'bigint' })
    id: number

    @Column()
    name: string

    @Column()
    stock: number

    @Column({ type: 'float', precision: 10, scale: 2 })
    price: number

    @CreateDateColumn({ type: 'timestamp' })
    created_timestamp: Timestamp

    @UpdateDateColumn({ type: 'timestamp' })
    updated_timestamp: Timestamp
}