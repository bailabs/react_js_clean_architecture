import { Item } from "domain/entities/Item"
import { ItemRepository } from "domain/repositories/ItemRepository"

export interface ItemService {
    getItems(): Promise<Item[]>
}

export class ItemServiceImpl implements ItemService {
    repo: ItemRepository

    constructor(repo: ItemRepository) {
        this.repo = repo
    }

    async getItems(): Promise<Item[]> {
        return this.repo.getItems()
    }
}
