import { atom } from "recoil"

const itemsState = atom({
    key: "itemsState",
    default: [],
})

export default itemsState
