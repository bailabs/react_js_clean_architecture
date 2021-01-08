import { Item } from "../../../domain/entities/Item";

export enum ConstantTypes {
    LIST_LOAD_REQUEST = "LIST_LOAD_REQUEST",
    LIST_LOAD_SUCCESS = "LIST_LOAD_SUCCESS",
    LIST_LOAD_FAILURE = "LIST_LOAD_FAILURE"
}

export type ItemProps = {
    itemsList: Item[]
}


