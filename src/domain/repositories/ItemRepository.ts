import { Item } from "domain/entities/Item"

export interface ItemRepository {
    getItems(): Promise<Item[]>
}
