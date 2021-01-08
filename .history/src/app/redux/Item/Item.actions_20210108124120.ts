import { ItemActionTypes } from "./Item.types"
import { ItemServiceImpl } from "../../../domain/usecases/ItemService"
import { ItemRepositoryImpl } from "../../../data/repositories/ItemRepositoryImpl"

export const refreshList = async (dispatch: any) => {
    dispatch({ type: ItemActionTypes.LIST_LOAD_REQUEST })

    try {
        const itemRepo = new ItemRepositoryImpl()
        const itemService = new ItemServiceImpl(itemRepo)
        const items = await itemService.GetItems()
        dispatch({ type: ItemActionTypes.LIST_LOAD_SUCCESS, payload: items })
    } catch (error) {
        dispatch({ type: ItemActionTypes.LIST_LOAD_FAILURE, error })
    }
}
