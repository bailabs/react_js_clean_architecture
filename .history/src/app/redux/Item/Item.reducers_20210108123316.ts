import { Reducer } from "redux";
import { ItemActionTypes,ItemState } from './Item.types'

export const initialState: ItemState = {
    itemList: [],
    loading: false
};

const reducer: Reducer<ItemState> = (state = initialState,action) => {
    switch (action.type){
        case ItemActionTypes.LIST_LOAD_REQUEST:
            return { ...state, loading: true}
        case ItemActionTypes.LIST_LOAD_FAILURE:
            return { ...state, loading: false}
        case ItemActionTypes.LIST_LOAD_SUCCESS:
            return { ...state, loading: false}
    }
}





// import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE } from "./Item.types"

// const initialState = {
//     loading: false,
//     items: [],
// }

// function items(state = initialState, action: { type: string; payload: any }) {
//     switch (action.type) {
//         case LIST_LOAD_REQUEST:
//             return {
//                 ...state,
//                 loading: true,
//             }

//         case LIST_LOAD_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//             }

//         case LIST_LOAD_SUCCESS:
//             return {
//                 ...state,
//                 items: action.payload,
//                 loading: false,
//             }

//         default:
//             return state
//     }
// }
// export default items
