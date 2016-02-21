import React from 'react';
import ReactDOM from 'react-dom';
import ToDoAppContainer from './containers/ToDoAppContainer';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

const store = configureStore();

class App extends React.Component {
  render(){
    return(
      <div>
        <Provider store={store}>
          <ToDoAppContainer />
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));