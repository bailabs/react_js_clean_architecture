import { selector } from "recoil"
import { ItemRepositoryImpl } from "data/repositories/ItemRepositoryImpl"
import { ItemServiceImpl } from "domain/usecases/ItemService"

const currentItemsState = selector({
    key: "currentItems",
    get: async ({ get }) => {
        const itemRepo = ItemRepositoryImpl.getInstance()
        const itemService = new ItemServiceImpl(itemRepo)
        try {
            const items = await itemService.getItems()
            return items
        } catch (error) {
            throw error
        }
    },
})

export default currentItemsState
