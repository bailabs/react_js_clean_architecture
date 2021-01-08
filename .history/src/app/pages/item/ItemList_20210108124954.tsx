import {useDispatch} from "react-redux"
import React from "react"
import { connect } from "react-redux"
import { refreshList } from "../../redux/Item/Item.actions"
import { ItemProps, Item } from "../../redux/Item/Item.types"

const ItemList = ({ items, refreshList }: ItemProps) => {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={dispatch(refreshList)}>Refresh</button>
            <ul>
                {items.map((item: Item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state: any) => ({
    items: state.items.items,
})

export default connect(mapStateToProps)(ItemList)
