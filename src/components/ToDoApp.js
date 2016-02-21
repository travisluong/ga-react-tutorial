import React from 'react';
import ToDoList from './ToDoList'
import ToDoSubmit from './ToDoSubmit'

class ToDoApp extends React.Component {

  componentWillMount(){

  }

  updateNewToDo = (event) =>{
    this.props.updateNewToDo(event.target.value);
  }

  addNewListItem = (event) => {
    event.preventDefault();
    this.props.addNewListItem();
  }

  deleteListItem = (index) => {
    this.props.deleteListItem(index);
  }

  completeItem = (index) => {
    this.props.completeItem(index);
  }

  onClick = ()=>{
    this.props.onClick();
  }

  render(){
    return (
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-body" onClick={this.onClick}>
              <h1>My To Do App {this.number} {1+1}</h1>
              <hr/>
              <ToDoList 
                deleteListItem={this.deleteListItem}
                completeItem={this.completeItem}
                list={this.props.toDoApp.list} />
              <ToDoSubmit
                newToDo={this.props.toDoApp.newToDo}
                updateNewToDo={this.updateNewToDo}
                addNewListItem={this.addNewListItem}
              />
                }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoApp;