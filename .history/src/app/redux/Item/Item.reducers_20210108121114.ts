import * as actionTypes from "./Item.types"
import { ItemState,ItemAction } from "./Item.types"

const initialState: ItemState  = {
    loading: false,
    itemList: []
}

const itemReducers = (
    state: ItemState = initialState,
    action: ItemAction
) : ItemState => {
    switch(action.type){
        case actionTypes.LIST_LOAD_REQUEST:
            return { ...state, loading: true }
        case actionTypes.LIST_LOAD_SUCCESS:
            return { ...state, loading: false }
        case actionTypes.LIST_LOAD_FAILURE:
            return { ...state, loading: false }
        default:
            return state
    }
}

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
