import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//store
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer';



const store = createStore(rootReducer);
store.subscribe(()=>console.log('store:',store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
)