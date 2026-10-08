function ProgressCard() {
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
                />
            </form>
        </div>
    );
}

export default ProgressCard;