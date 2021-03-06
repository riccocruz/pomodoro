import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pomodoro from './App';
import * as serviceWorker from './serviceWorker';

let INITIAL_SESSION = 25;
let INITIAL_BREAKTIME = 5;
ReactDOM.render(
    <React.StrictMode>
        <Pomodoro initialSession={INITIAL_SESSION * 60} initialBreak={INITIAL_BREAKTIME * 60}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
