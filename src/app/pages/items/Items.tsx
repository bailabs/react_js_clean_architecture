import React from "react"
import PropTypes from "prop-types"
import { Item } from "@domain/entities/Item"

const Items = ({ items }: { items: Item[] }) => {
    function handleClick() {
        console.log("handleClick")
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

Items.propTypes = {
    items: PropTypes.array,
}

export default Items
