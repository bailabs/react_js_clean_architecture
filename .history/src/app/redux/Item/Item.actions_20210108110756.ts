import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE,RefreshListActionTypes } from "./Item.types"
import { ItemServiceImpl } from "../../../domain/usecases/ItemService"
import { ItemRepositoryImpl } from "../../../data/repositories/ItemRepositoryImpl"



// export const refreshList = async (dispatch: any) => {
//     dispatch({ type: LIST_LOAD_REQUEST })

//     try {
//         const itemRepo = new ItemRepositoryImpl()
//         const itemService = new ItemServiceImpl(itemRepo)
//         const items = await itemService.GetItems()
//         dispatch({ type: LIST_LOAD_SUCCESS, payload: items })
//     } catch (error) {
//         dispatch({ type: LIST_LOAD_FAILURE, error })
//     }
// }


export function refreshList(): RefreshListActionTypes {
    return {
      type: SEND_MESSAGE,
      payload: newMessage
    }
  }

// / TypeScript infers that this function is returning SendMessageAction
// export function sendMessage(newMessage: Message): ChatActionTypes {
//   return {
//     type: SEND_MESSAGE,
//     payload: newMessage
//   }
// }