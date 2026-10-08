'use client";'


import { useState, useRef } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const intervalo = useRef<ReturnType<typeof setInterval> | null>(null);

    const start = () => {
        console.log("Start presionado");
        if (intervalo.current) return; 
        intervalo.current = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000);
    };

    const stop = () => {
        if (intervalo.current) {
            clearInterval(intervalo.current);
            intervalo.current = null;
        }
    };

    const reset = () => {
        stop();
        setSeconds(0);
    };

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    const boton = {
        width: 140,
        height: 100,
        fontSize: 32,
        border: "none",
        cursor: "pointer",
        marginRight: 10,
    };

    return (
        <div style={{ padding: 20 }}>
            <h1 style={{ fontSize: 64, fontFamily: "serif" }}>Timer</h1>

            <p style={{ fontSize: 40, fontFamily: "serif", margin: "30px 0" }}>
                {mins} mins {secs} secs
            </p>

            <button style={{ ...boton, backgroundColor: "green" }} onClick={start}>
                Start
            </button>
            <button style={{ ...boton, backgroundColor: "red" }} onClick={stop}>
                Stop
            </button>
            <button style={{ ...boton, backgroundColor: "yellow" }} onClick={reset}>
                Reset
            </button>
        </div>
    );
}

export default Timer;