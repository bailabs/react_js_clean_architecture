import React from "react"
import { useRecoilValueLoadable } from "recoil"

import currentItems from "app/selectors/currentItems"
import { Item } from "domain/entities/Item"

const ItemList = () => {
    const itemsLoadable = useRecoilValueLoadable(currentItems)
    const { state } = itemsLoadable

    if (state === "hasError") {
        return <div>Unable to fetch</div>
    }

    if (state === "loading") {
        return <div>Loading</div>
    }

    const items = itemsLoadable.getValue()
    return (
        <ul>
            {items.map((item: Item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    )
}

export default ItemList
