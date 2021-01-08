export interface Item {
    id: number
    name: string
}

export enum ItemActionTypes {
    LIST_LOAD_REQUEST = "LIST_LOAD_REQUEST",
    LIST_LOAD_SUCCESS = "LIST_LOAD_SUCCESS",
    LIST_LOAD_FAILURE = "LIST_LOAD_FAILURE"
}

export type ItemState = {
    itemList: Item[],
    loading: boolean
}
