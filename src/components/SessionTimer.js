import React, {useState, useEffect} from "react";

function SessionTimer(props) {
    const [session, setSession] = useState(props.session);
    let timeInSession = calculateTime();

    useEffect(() => {
        const interval = setInterval(() => {
            setSession(session => session - 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function calculateTime() {
        let minutes = Math.floor(session / 60);
        let seconds = (session % 60);
        return minutes.toString() + ':' + seconds.toString().padStart(2, "0");
    }

    return <div>{timeInSession}</div>
}

export default SessionTimer;