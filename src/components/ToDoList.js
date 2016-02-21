import React from 'react';

const ToDoList = ({ list, deleteListItem, completeItem }) => {

  const generateList = () => list.map((el, i) => (
    <li key={i}>
      <span 
        onClick={completeItem.bind(null, i)}
        style={ 
          el.isDone ?
          {fontSize: '20px', textDecoration: 'line-through'} :
          { fontSize: '20px' } 
        }
      >
      {el.name}
      </span>
      <button 
        className="btn btn-default"
        onClick={deleteListItem.bind(null, i)}
        >x</button>
    </li>
  ))

  return (
    <div>
      <ul>
        {generateList()}
      </ul>
    </div>
  );
}

export default ToDoList;