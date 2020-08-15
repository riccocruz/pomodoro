import React, {useEffect, useState} from 'react';
import './App.css';
import SessionTimer from './components/SessionTimer';
import Reset from './components/Reset';
import Pause from "./components/Pause";
import SetLengthTimer from "./components/SetLengthTimer";

function App(props) {
    const [session, setSession] = useState(props.initialSession);
    const [isActive, setIsActive] = useState(false);
    const [lengthTimer, setLengthTimer] = useState(session / 60);

    let timeInSession = calculateTime();
    useEffect(() => {
        let interval = null;
        if (isActive && session > 0) {
            interval = setInterval(() => {
                setSession(session => session - 1);
            }, 1000);
        }

        if (session <= 0) {
            setSession(0);
        }

        return () => clearInterval(interval);

    }, [session, isActive]);

    function calculateTime() {
        let minutes = Math.floor(session / 60);
        let seconds = (session % 60);
        return minutes.toString() + ':' + seconds.toString().padStart(2, "0");
    }

    // function decrementTimer() {
    //     if (props.session > 60) {
    //         setSession(session => session - 60);
    //     }
    // }

    return (
        <div className="App">
            <div id={"break-label"}>Break</div>
            <div id={"break-decrement"}>Up</div>
            <div id={"break-increment"}>Down</div>
            <div id={"break-length"}>5</div>
            <br/>

            <SetLengthTimer
                session={session}
                setSession={setSession}
                isActive={isActive}
                lengthTimer={lengthTimer}
                setLengthTimer={setLengthTimer}
            />

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
                    session={session}
                    lengthTimer={lengthTimer}
                    setSession={setSession}
                    setIsActive={setIsActive}
                />
            </div>


        </div>
    );
}

export default App;
