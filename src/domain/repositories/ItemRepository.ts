import { Item } from "@domain/entities/Item"

export interface ItemRepository {
    GetItems(): Promise<Item[]>
}
