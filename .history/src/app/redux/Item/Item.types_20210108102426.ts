import { Item } from "../../../domain/entities/Item"

export const LIST_LOAD_REQUEST = "LIST_LOAD_REQUEST"
export const LIST_LOAD_SUCCESS = "LIST_LOAD_SUCCESS"
export const LIST_LOAD_FAILURE = "LIST_LOAD_FAILURE"


interface ListLoadRequestAction {
    type: typeof LIST_LOAD_REQUEST,
    payload: Item[]
}

// export type ItemProps = {
//     items: Item[]
//     refreshList: () => Item[]
// }

// export interface Item {
//     id: number
//     name: string
// }
