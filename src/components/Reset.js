import React from "react";

function Reset(props) {

    return (
        <button
            type={"button"}
            onClick={() => {
                props.setSession(props.lengthTimer * 60);
                props.setBreakTime(props.breakLengthTimer * 60);
                props.setIsActive(false);
            }}
        >Reset</button>
    )
}

export default Reset;