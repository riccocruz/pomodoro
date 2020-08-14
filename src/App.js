import React from 'react';
import './App.css';
import SessionTimer from './components/SessionTimer';

function App(props) {

    return (
        <div className="App">
            <div id={"break-label"}>Break</div>
            <div id={"break-decrement"}>Up</div>
            <div id={"break-increment"}>Down</div>
            <div id={"break-length"}>5</div>
            <br/>

            <div id={"session-label"}>Session</div>
            <div id={"session-decrement"}>Up</div>
            <div id={"session-increment"}>Down</div>
            <div id={"session-length"}>25</div>
            <br/>

            <div id={"timer-label"}>Session</div>
            <div id={"time-left"}><SessionTimer session={props.session}/></div>
            <br/>

            <div id={"start_stop"}>
                <button>pause/resume</button>
            </div>
            <div id={"reset"}>
                <button>reset button</button>
            </div>


        </div>
    );
}

export default App;
