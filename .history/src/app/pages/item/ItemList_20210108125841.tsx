import React from "react"
import { connect, useDispatch } from "react-redux"
import { refreshList } from "../../redux/Item/Item.actions"
import { ItemProps, Item } from "../../redux/Item/Item.types"

interface RootState {
    items: []
}

const mapStateToProps = (state: RootState) => ({
    items: state.items.items,
})

const ItemList = ({ items }: ItemProps) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(refreshList)
    }
    return (
        <div>
            <button onClick={handleClick}>Refresh</button>
            <ul>
                {items.map((item: Item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default connect(mapStateToProps)(ItemList)
