import React from "react";

function Reset(props) {

    return (
        <button
            type={"button"}
            onClick={() => { props.setSession(props.session); console.log("wtfff", props.session)}}
        >Reset</button>
    )
}

export default Reset;