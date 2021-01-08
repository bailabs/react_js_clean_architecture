import React from "react"
import { connect, useDispatch } from "react-redux"
import { refreshList } from "../../redux/Item/Item.actions"
import { ItemProps, Item } from "../../redux/Item/Item.types"

const ItemList = ({ items }: ItemProps) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        console.log("TRY")
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

const mapStateToProps = (state: any) => ({
    items: state.items.items,
})


export default connect(mapStateToProps)(ItemList)
