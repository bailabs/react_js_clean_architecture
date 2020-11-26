import { Item } from "../entities/Item"

export interface ItemRepository {
    GetItems(): Promise<Item[]>
}
