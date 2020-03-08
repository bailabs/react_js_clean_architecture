import React from "react";
import { connect } from "react-redux";
import { refreshList } from "./Item.actions";

const ItemList = ({ items, refreshList }) => (
  <div>
    <button onClick={refreshList}>Refresh</button>
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  items: state.items.items
});

const mapDispatchToProps = dispatch => ({
  refreshList: () => dispatch(refreshList)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
