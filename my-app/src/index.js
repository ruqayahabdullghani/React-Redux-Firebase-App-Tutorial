import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore , applyMiddleware } from 'redux'
import rootReducer from './store/reduxes/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {getFirestore} from 'redux-firestore'
import {getFirebase} from 'react-redux-firebase'



const store = createStore(rootReducer,applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
