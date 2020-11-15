import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ list, clearAll, deleteItem, editItem }) => {
  return (
    <React.Fragment>
      <div className="grocery-container">
        <div className="grocery-list">
          {list.map((item) => {
            const { id, listName } = item;
            return (
              <div className="grocery-item" key={id}>
                <p className="title">{listName}</p>
                <div className="btn-container">
                  <button type="button" className="edit-btn" onClick={()=>editItem(id)}>
                    <FaEdit />
                  </button>
                  <button
                    type="button"
                    className="delete-btn"
                    onClick={()=>deleteItem(id)}
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button className="clear-btn" onClick={clearAll}>
          clear items
        </button>
      </div>
    </React.Fragment>
  );
};

export default List;
