import React from 'react';

const ToDoSubmit = ({newToDo, updateNewToDo, addNewListItem}) => (
  <form onSubmit={addNewListItem}>
    <div
      className="form-group">
      <label
        htmlFor="listInput">
        Add Item
      </label>
      <input
        type="text"
        className="form-control"
        id="listItemInput"
        placeholder="Add new todo"
        value={newToDo}
        onChange={updateNewToDo}
      />
      <button
        className="btn btn-primary">
        Add Item
      </button>
    </div>
  </form>
)

export default ToDoSubmit