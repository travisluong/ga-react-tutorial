
// const CONSTANT = 'CONSTANT';

// let action = {type: CONSTANT};

// function actionCreator(){
//   return action;
// }

const ON_CLICK = 'ON_CLICK';
const UPDATE_NEW_TODO = 'UPDATE_NEW_TODO';
const ADD_NEW_LIST_ITEM = 'ADD_NEW_LIST_ITEM';
const DELETE_LIST_ITEM = 'DELETE_LIST_ITEM';
const COMPLETE_ITEM = 'COMPLETE_ITEM';

export function completeItem(index) {
  return {
    type: COMPLETE_ITEM,
    index
  }
}

export function deleteListItem(index){
  return {
    type: DELETE_LIST_ITEM,
    index
  }
}

export function addNewListItem(){
  return {
    type: ADD_NEW_LIST_ITEM
  }
}

export function updateNewToDo(value){
  return {
    type: UPDATE_NEW_TODO,
    value
  }
}

export function onClick() {
  return {
    type: ON_CLICK
  }
}

const initialState = {
      list: [{name: 'thing1', isDone: false}],
      newToDo: 'test'
    };

export default function reducer(state = initialState, action ){
  switch(action.type){
  case ON_CLICK:
    return state;
  case UPDATE_NEW_TODO:
   return Object.assign(
    {},
    state,
    {
      newToDo: action.value
    })
  case ADD_NEW_LIST_ITEM:
    return Object.assign(
      {},
      state,
      {
        list: [...state.list, {name: state.newToDo, isDone: false}],
        newToDo: ''
      }
    )
  case DELETE_LIST_ITEM:
   return Object.assign(
      {},
      state,
      {
        list: [
          ...state.list.slice(0,action.index),
          ...state.list.slice(action.index+1)
        ]
      }
    )
  case COMPLETE_ITEM:
   return Object.assign(
      {},
      state,
      {
        list: [
          ...state.list.slice(0,action.index),
          Object.assign({}, {
            name: state.list[action.index].name,
            isDone: !state.list[action.index].isDone
          }),
          ...state.list.slice(action.index+1)
        ]
      }
    )
  // case CONSTANT:
  //   return {}
  default:
    return state;
  }
}