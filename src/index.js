import React from 'react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/Reducers'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import MainPage from './page/MainPage';

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <MainPage />
    </Provider>, 
    document.getElementById('root')
)
// ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<MainPage/>, document.getElementById())

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
