"use client";
import { useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./ProgressCard.css";

function ProgressCard() {
    const [value, setValue] = useState(0);

    return (
        <div className="container text-center mt-5" style={{ maxWidth: 450 }}>
            <h2 className="mb-4">Progress bar</h2>

            <ProgressBar
                now={value}
                label={`${value}%`}
                className="barra"
                style={{ height: 34 }}
            />

            <form className="mt-4 d-flex justify-content-center align-items-center gap-3">
                <label htmlFor="progressInput">Input Percentage:</label>
                <input
                    type="number"
                    id="progressInput"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className="form-control w-auto input-pildora"
                />
            </form>
        </div>
    );
}

export default ProgressCard;