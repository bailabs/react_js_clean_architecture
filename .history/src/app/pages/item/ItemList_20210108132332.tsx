import React from "react"
import { connect, useDispatch } from "react-redux"
import { refreshList } from "../../redux/Item/Item.actions"
import { ItemProps, Item } from "../../redux/Item/Item.types"

interface RootState {
    items: any
}
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

const mapStateToProps = (state: RootState) => {
    console.log(state.items)
    return {
        items: state.items.items,
    }
}

export default connect(mapStateToProps)(ItemList)
