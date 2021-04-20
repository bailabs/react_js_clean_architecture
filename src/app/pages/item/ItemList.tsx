import React from "react"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { fetchList } from "../../redux/Item/Item.slice"

const ItemList = () => {
    const items = useAppSelector((state) => state.items.items)
    const loading = useAppSelector((state) => state.items.loading)
    const dispatch = useAppDispatch()
    const handleClick = () => {
        dispatch(fetchList())
    }
    return (
        <div>
            <button onClick={handleClick} disabled={loading}>
                Refresh
            </button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList
