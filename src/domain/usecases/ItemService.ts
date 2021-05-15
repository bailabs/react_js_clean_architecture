import { Item } from "../entities/Item"
import { ItemRepository } from "../repositories/ItemRepository"

export default class ItemServiceImpl {
    itemRepo: ItemRepository

    constructor(ir: ItemRepository) {
        this.itemRepo = ir
    }

    async GetItems(): Promise<Item[]> {
        return this.itemRepo.GetItems()
    }
}
