import React from "react";

function SetLengthTimer(props) {
    // const [lengthTimer, setLengthTimer] = useState(props.session / 60);

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
            <div id={"session-label"}>Session Length</div>
            {props.isActive ? <br/>: changeLengthTimer}
            <div id={"session-length"}>{props.lengthTimer}</div>
        </div>
    )

}

export default SetLengthTimer;