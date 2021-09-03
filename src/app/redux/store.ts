import { configureStore } from "@reduxjs/toolkit"

import counterSlice from "./counter/counter.slice"
import plantSlice from "./plant/plant.slice"

export const store = configureStore({
    reducer: {
        plantSlice,
        counterSlice,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
