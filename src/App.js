import React, {useEffect, useState} from 'react';
import './App.css';
import SessionTimer from './components/SessionTimer';
import Reset from './components/Reset';
import Pause from "./components/Pause";
import SetLengthTimer from "./components/SetLengthTimer";

function App(props) {
    const [session, setSession] = useState(props.initialSession);
    const [lengthTimer, setLengthTimer] = useState(session / 60);

    const [breakTime, setBreakTime] = useState(props.initialBreak);
    const [breakLengthTimer, setBreakLengthTimer] = useState(breakTime / 60);

    const [isActive, setIsActive] = useState(false);
    const [isSession, setIsSession] = useState(true);

    let timeInSession = calculateTime();
    useEffect(() => {
        let interval = null;
        if (isSession) {
            if (isActive && session > 0) {
                interval = setInterval(() => {
                    setSession(session => session - 1);
                }, 1000);
            }
            if (session <= 0) {
                setSession(0);
                setIsSession(false);
            }
        } else {
            console.log(isActive, breakTime, isSession);
            if (isActive && breakTime > 0) {
                interval = setInterval(() => {
                    setBreakTime(breakTime => breakTime - 1);
                }, 1000);
            }

            if (breakTime < 0) {
                setBreakTime(0);
                setIsSession(true);
            }
        }
        return () => clearInterval(interval);

    }, [breakTime, session, isSession, isActive]);

    function calculateTime() {
        let minutes = Math.floor(session / 60);
        let seconds = (session % 60);
        return minutes.toString() + ':' + seconds.toString().padStart(2, "0");
    }

    return (
        <div className="App">
            {/*<div id={"break-label"}>Break</div>*/}
            {/*<div id={"break-decrement"}>Up</div>*/}
            {/*<div id={"break-increment"}>Down</div>*/}
            {/*<div id={"break-length"}>5</div>*/}
            {/*<br/>*/}

            <SetLengthTimer
                name={"Break Length"}
                session={breakTime}
                setSession={setBreakTime}
                isActive={isActive}
                lengthTimer={breakLengthTimer}
                setLengthTimer={setBreakLengthTimer}
            />

            <SetLengthTimer
                name={"Session Length"}
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
                    breakLengthTimer={breakLengthTimer}
                    lengthTimer={lengthTimer}
                    setSession={setSession}
                    setIsActive={setIsActive}
                    setBreakTime={setBreakTime}
                />
            </div>


        </div>
    );
}

export default App;
