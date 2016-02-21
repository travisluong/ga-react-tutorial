import { connect } from 'react-redux';
import ToDoApp from '../components/ToDoApp.js'
import {
  onClick,
  updateNewToDo,
  addNewListItem,
  deleteListItem,
  completeItem
} from '../redux/modules/toDoApp';

function mapStateToProps(state){
  return {
    toDoApp: state.toDoApp
  };
}

function mapDispatchToProps(dispatch){
  return {
    onClick: () => dispatch(onClick()),
    updateNewToDo: (value) => dispatch(updateNewToDo(value)),
    addNewListItem: () => dispatch(addNewListItem()),
    deleteListItem: (i) => dispatch(deleteListItem(i)),
    completeItem: (i) => dispatch(completeItem(i))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoApp);