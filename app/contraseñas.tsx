"use client";

import { useState } from "react";

function PasswordGenerator() {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(10);
    const [upper, setUpper] = useState(true);
    const [lower, setLower] = useState(true);
    const [numbers, setNumbers] = useState(true);
    const [special, setSpecial] = useState(false);
    const [copied, setCopied] = useState(false);

    const generate = () => {
        let chars = "";
        if (upper) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lower) chars += "abcdefghijklmnopqrstuvwxyz";
        if (numbers) chars += "0123456789";
        if (special) chars += "!@#$%^&*()_+-=?";

        if (chars === "") {
            setPassword("");
            return;
        }

        let result = "";
        for (let i = 0; i < length; i++) {
            result += chars[Math.floor(Math.random() * chars.length)];
        }
        setPassword(result);
        setCopied(false);
    };

    const copy = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
    };

    return (
        <div style={{ padding: 20, maxWidth: 400 }}>
            <h2>Password Generator</h2>
            <p>Create strong and secure passwords to keep your account safe online.</p>

            <input value={password} readOnly style={{ width: 200, padding: 8 }} />
            <button onClick={generate}>↻</button>
            <button onClick={copy}>{copied ? "Copied!" : "Copy"}</button>

            <p>Password Length: {length}</p>
            <input
                type="range"
                min="4"
                max="30"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
            />

            <div>
                <label>
                    <input type="checkbox" checked={upper} onChange={() => setUpper(!upper)} />
                    Uppercase
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={lower} onChange={() => setLower(!lower)} />
                    Lowercase
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={numbers} onChange={() => setNumbers(!numbers)} />
                    Numbers
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox" checked={special} onChange={() => setSpecial(!special)} />
                    Special Characters
                </label>
            </div>
        </div>
    );
}

export default PasswordGenerator;