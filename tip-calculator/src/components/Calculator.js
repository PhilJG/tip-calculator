
export default function Calculator({
    bill,
    people,
    tip,
    handleBill,
    handlePeople,
    handleTip,
    tipPercentage,
}) {

    const tipButtons = tipPercentage.map((percentage, index) => (
        <button
            key={index}
            className="percentSelect"
            value={percentage}
            onClick={handleTip}
        >
            {`${percentage * 100}%`}
        </button>
    ));

    return (
        <section className="container calculator">
            <div className="input__span">
                <h3>Bill</h3>
                <span id="input__message" className="hidden">Must be a number</span>
            </div>
            <input
                id="entry"
                className="input__main"
                placeholder={bill}
                type="number"
                onChange={handleBill}
            />

            <h3>Select Tip %</h3>

            <div id="tipSelect">
                {tipButtons}
                <button className="customPercent" value="">Custom</button>
            </div>
            <input
                id="customInput"
                className="percentSelect hidden"
                type="number"
            // placeholder={people}

            />

            <div className="input__span">
                <h3>Number of People</h3>
                <span id="input__message" className="hidden">Must be a number</span>
            </div>

            <input type="number" className="input__main" placeholder="0" id="people" onChange={handlePeople} />
        </section >

    )
}