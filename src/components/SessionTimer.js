import React from "react";

function SessionTimer(props) {

    return <div>
        <div id={"timer-label"}>{props.isSession ? "Session" : "Break"}</div>
        <div id={"time-left"}>{props.isSession ? props.session : props.breakTime}</div>
    </div>
}

export default SessionTimer;