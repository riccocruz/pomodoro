import React from "react";
import '../App.css';

function SetLengthTimer(props) {
    // TODO: make sure it can't increment over 60 and decrement below 1

    const timerName = (
        <span> {props.name} </span>
    );

    const changeLengthTimer = (
        <div>

            <span id={"session-decrement"}>
                <button
                    type={"button"}
                    onClick={() => {
                        if (props.session - 60 > 0) {
                            props.setSession(session => session - 60);
                            props.setLengthTimer(lengthTimer => lengthTimer - 1);
                        }
                    }}
                ><div className={"arrows"}>&darr;</div>
                </button>
            </span>
            {timerName}

            <span id={"session-increment"}>
                <button
                    type={"button"}
                    onClick={() => {
                        if (props.session + 60 <= 3600) {
                            props.setSession(session => session + 60);
                            props.setLengthTimer(lengthTimer => lengthTimer + 1);
                        }
                    }}
                ><div className={"arrows"}>&uarr;</div>
                </button>
            </span>

        </div>
    );

    return (
        <div id={"session-label"} className={"card"}>
            {props.isActive ? timerName : changeLengthTimer}
            <div id={"session-length"}>{props.lengthTimer}</div>
        </div>
    )

}

export default SetLengthTimer;