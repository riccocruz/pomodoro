import React from "react";

function Pause(props) {
    const pauseButton = props.isActive ? "Pause" : "Start";
    return (
        <button
            type={"button"}
            onClick={() => {
                // props.setSession(props.session);
                props.setIsActive(!props.isActive);
            }}
        >{pauseButton}</button>
    )
}

export default Pause;