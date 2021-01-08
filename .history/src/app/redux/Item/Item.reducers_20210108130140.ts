import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE } from "./Item.types"

const initialState = {
    loading: false,
    items: [],
}

function items(state = initialState, action: { type: string; payload: any }) {
    console.log(action.payload)
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
export default items
