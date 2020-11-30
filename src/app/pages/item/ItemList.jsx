import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { refreshList } from "./Item.actions"

const ItemList = ({ items, refreshList }) => {
    console.log(items)
    return (
        <div>
            <button onClick={refreshList}>Refresh</button>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.items.items,
})

const mapDispatchToProps = (dispatch) => ({
    refreshList: () => dispatch(refreshList),
})
ItemList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
    ),
    refreshList: PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
