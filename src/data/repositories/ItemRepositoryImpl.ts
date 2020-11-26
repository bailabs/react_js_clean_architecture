import { Item } from "../../domain/entities/Item"
import { ItemRepository } from "../../domain/repositories/ItemRepository"

class ItemDTO {
    id = 0
    name = ""
}

export class ItemRepositoryImpl implements ItemRepository {
    jsonUrl =
        "https://gist.githubusercontent.com/janithl/6bfbd787a0361c170ac760e8fb5ba0fd/raw/a0ffacb7c0fc21a0266371f632cf4107f80362f4/itemlist.json"

    async GetItems(): Promise<Item[]> {
        const res = await fetch(this.jsonUrl)
        const jsonData = await res.json()
        return jsonData.map((item: ItemDTO) => new Item(item.id, item.name))
    }
}
