import {
    RefreshListState,
    RefreshListActionTypes,
    LIST_LOAD_REQUEST, 
    LIST_LOAD_SUCCESS, 
    LIST_LOAD_FAILURE
} from "./Item.types"


const initialState: RefreshListState = {
    itemList: []
}

export function refreshListReducer(
    state = initialState,
    action: RefreshListActionTypes,
    loading: false

): RefreshListState {
        switch (action.type) {
        case LIST_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case LIST_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
            }

        case LIST_LOAD_SUCCESS:
            return {
                ...state,
                items: action.payload,
                loading: false,
            }

        default:
            return state
    }
}

}


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