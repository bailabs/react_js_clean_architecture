export const LIST_LOAD_REQUEST = "LIST_LOAD_REQUEST"
export const LIST_LOAD_SUCCESS = "LIST_LOAD_SUCCESS"
export const LIST_LOAD_FAILURE = "LIST_LOAD_FAILURE"

export interface Item {
    id: number
    name: string
}

type ItemState = {
    itemList: Item[],
    loading: boolean
}

type ItemAction = {
    type: string,
    item: Item
}

type DispatchType = (args: ItemAction) => ItemAction