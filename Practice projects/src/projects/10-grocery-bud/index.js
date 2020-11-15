import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import "./index.css";
function App() {
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });
  const [list, setList] = useState(getStorageItem());
  const [name, setName] = useState("");
  const [editedID, setEditedID] = useState("");
  function getStorageItem() {
    const items = JSON.parse(localStorage.getItem("list"));
    if (items) {
      return items;
    }
    return [];
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name == "") {
    } else if (edit && name !== "") {
      const newList = list.map((item) => {
        if (item.id === editedID) {
          return { ...item, listName: name };
        }
        return item;
      });

      setList(newList);
      setEdit(false);
      setName("");
      setAlert({
        show: true,
        type: "success",
        message: "Item has been Edited",
      });
    } else {
      setList([
        ...list,
        { id: new Date().getTime().toString(), listName: name },
      ]);
      setAlert({ show: true, type: "success", message: "Item has been added" });
      setName("");
    }
  };

  const clearAll = () => {
    setList([]);
    setAlert({ show: true, type: "danger", message: "Item has been cleared" });
  };

  const deleteItem = (id) => {
    const newList = list.filter((item) => {
      return item.id !== id;
    });
    setList(newList);
    setAlert({ show: true, type: "danger", message: "Item has been deleted" });
  };

  const editItem = (id) => {
    const selectedItem = list.find((item) => {
      return item.id === id;
    });
    setName(selectedItem.listName);
    setEditedID(selectedItem.id);
    setEdit(true);
  };

  useEffect(() => {
    const newObj = [...list];
    localStorage.setItem("list", JSON.stringify(newObj));
  }, [list]);

  useEffect(() => {
    const clear = setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
    return () => {
      clearTimeout(clear);
    };
  }, [alert]);

  return (
    <React.Fragment>
      <section className="section-center">
        {alert.show && <Alert {...alert} />}
        <form className="grocery-form" onSubmit={handleSubmit}>
          <h3>Grocery Bud</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="e.g. eggs"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {edit ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <List
            list={list}
            clearAll={clearAll}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        )}
      </section>
    </React.Fragment>
  );
}

export default App;
