export const LIST_LOAD_REQUEST = "LIST_LOAD_REQUEST"
export const LIST_LOAD_SUCCESS = "LIST_LOAD_SUCCESS"
export const LIST_LOAD_FAILURE = "LIST_LOAD_FAILURE"

export type ItemProps = {
    items: Item[]
    refreshList: () => Item[]
}

export type ItemActionType = RefreshItemListSuccess

export interface RefreshItemListSuccess {
    type: typeof LIST_LOAD_SUCCESS
    payload: Item[]
}

export interface Item {
    id: number
    name: string
}
