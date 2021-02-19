import { Item } from "domain/entities/Item"
import { ItemRepository } from "domain/repositories/ItemRepository"

const _jsonUrl =
    "https://gist.githubusercontent.com/janithl/6bfbd787a0361c170ac760e8fb5ba0fd/raw/a0ffacb7c0fc21a0266371f632cf4107f80362f4/itemlist.json"

class ItemDTO {
    id = 0
    name = ""
}

export class ItemRepositoryImpl implements ItemRepository {
    private static instance: ItemRepositoryImpl

    private constructor() {}

    public static getInstance(): ItemRepositoryImpl {
        if (!ItemRepositoryImpl.instance) {
            ItemRepositoryImpl.instance = new ItemRepositoryImpl()
        }
        return ItemRepositoryImpl.instance
    }

    async getItems(): Promise<Item[]> {
        const res = await fetch(_jsonUrl)
        const jsonData = await res.json()
        return jsonData.map((item: ItemDTO) => new Item(item.id, item.name))
    }
}
