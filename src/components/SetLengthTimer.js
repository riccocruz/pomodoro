import React from "react";

function SetLengthTimer(props) {
    // TODO: make sure it can't increment over 60 and decrement below 1
    const changeLengthTimer = (
        <div>
            <div id={"session-increment"}>
                <button
                    type={"button"}
                    onClick={() => {
                        props.setSession(session => session + 60);
                        props.setLengthTimer(lengthTimer => lengthTimer + 1);

                    }}
                >Up</button>
            </div>
            <div id={"session-decrement"}>
                <button
                    type={"button"}
                    onClick={() => {
                        props.setSession(session => session - 60);
                        props.setLengthTimer(lengthTimer => lengthTimer - 1);
                    }}
                >Down</button>
            </div>
        </div>
    );


    return (
        <div>
            <div id={"session-label"}>{props.name}</div>
            {props.isActive ? <br/>: changeLengthTimer}
            <div id={"session-length"}>{props.lengthTimer}</div>
        </div>
    )

}

export default SetLengthTimer;