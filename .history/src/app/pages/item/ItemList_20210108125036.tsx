import React from "react"
import { connect, useDispatch } from "react-redux"
import { refreshList } from "../../redux/Item/Item.actions"
import { ItemProps, Item } from "../../redux/Item/Item.types"

const ItemList = ({ items, refreshList }: ItemProps) => {
    console.log(items)
    return (
        <div>
            <button onClick={refreshList}>Refresh</button>
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

const mapDispatchToProps = (dispatch: any) => ({
    refreshList: () => dispatch(refreshList),
})
export default connect(mapStateToProps, mapDispatchToProps)(ItemList)