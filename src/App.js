import React, {useEffect, useState} from 'react';
import './App.css';
import SessionTimer from './components/SessionTimer';
import Reset from './components/Reset';
import Pause from "./components/Pause";
import SetLengthTimer from "./components/SetLengthTimer";

function Pomodoro(props) {
    const [session, setSession] = useState(props.initialSession);
    const [lengthTimer, setLengthTimer] = useState(session / 60);

    const [breakTime, setBreakTime] = useState(props.initialBreak);
    const [breakLengthTimer, setBreakLengthTimer] = useState(breakTime / 60);

    const [isActive, setIsActive] = useState(false);
    const [isSession, setIsSession] = useState(true);

    let timeInSession = calculateTime(session);
    let timeInBreak = calculateTime(breakTime);

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
            if (isActive && breakTime > 0) {
                interval = setInterval(() => {
                    setBreakTime(breakTime => breakTime - 1);
                }, 1000);
            }

            if (breakTime <= 0) {
                setBreakTime(0);
                setIsSession(true);
            }
        }
        return () => clearInterval(interval);

    }, [breakTime, session, isSession, isActive]);

    function calculateTime(t) {
        let minutes = Math.floor(t / 60);
        let seconds = (t % 60);
        return minutes.toString() + ':' + seconds.toString().padStart(2, "0");
    }

    return (
        <div className="App">
            <h1>Pomodoro</h1>
            <div>
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
            </div>
            <div className={isActive ? "session-start card" : "session-stop card"}>
                <SessionTimer
                    session={timeInSession}
                    breakTime={timeInBreak}
                    isSession={isSession}
                />
                <div className={"session-buttons"}>
                    <div id={"start_stop"}>
                        <Pause
                            isActive={isActive}
                            setIsActive={setIsActive}
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
            </div>

        </div>
    );
}

export default Pomodoro;
