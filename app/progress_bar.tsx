"use client";
import { useState } from "react";

function ProgressCard() {
    const [value, setValue] = useState(0);

    return (
        <div className="progress-card">
            <h2>Progress Card</h2>
            <form>
                <label htmlFor="progressInput">Input Percentage:</label>
                <input
                    type="number"
                    id="progressInput"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                />
            </form>
            <p>Valor actual: {value}%</p>
        </div>
    );
}


export default ProgressCard;