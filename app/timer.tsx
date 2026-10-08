import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) return;

        const id = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000);

        return () => clearInterval(id);
    }, [running]);

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return (
        <div>
            <h1>Timer</h1>
            <p>{mins} mins {secs} secs</p>

            <button onClick={() => setRunning(true)}>Start</button>
            <button onClick={() => setRunning(false)}>Stop</button>
            <button onClick={() => { setRunning(false); setSeconds(0); }}>Reset</button>
        </div>
    );
}

export default Timer;