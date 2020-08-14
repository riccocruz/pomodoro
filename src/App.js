import React, {useEffect, useState} from 'react';
import './App.css';
import SessionTimer from './components/SessionTimer';
import Reset from './components/Reset';
import Pause from "./components/Pause";

function App(props) {
    const [session, setSession] = useState(props.session);
    const [isActive, setIsActive] = useState(true);

    let timeInSession = calculateTime();

    useEffect(() => {
        let interval = null;
        if (isActive && session !== 0) {
            interval = setInterval(() => {
                setSession(session => session - 1);
            }, 1000);
        }

        return () => clearInterval(interval);

    }, [isActive, session]);

    function calculateTime() {
        let minutes = Math.floor(session / 60);
        let seconds = (session % 60);
        return minutes.toString() + ':' + seconds.toString().padStart(2, "0");
    }

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
            <div id={"time-left"}>
                <SessionTimer
                    session={timeInSession}
                />
            </div>
            <br/>

            <div id={"start_stop"}>
                <Pause
                    isActive = {isActive}
                    setIsActive = {setIsActive}
                />
            </div>
            <div id={"reset"}>
                <Reset
                    session={props.session}
                    setSession = {setSession}
                    setIsActive = {setIsActive}
                />
            </div>


        </div>
    );
}

export default App;
