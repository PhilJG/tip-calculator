
export default function Calculator({
    bill,
    people,
    tip,
    selectBill,
    selectTip,
    selectPeople,
    tipPercentage,
    billPlaceholder,
    peoplePlaceholder
}) {
    const tipButtons = tipPercentage.map((percentage, index) => (
        <button
            key={index}
            className={tip !== percentage ? "percentSelect" : "percentSelect:active"}
            value={percentage}
            onClick={selectTip}
        >
            {`${percentage * 100}%`}
        </button>
    ));

    const handleBillChange = e => {
        if (e.target) {
            const newBill = Number(e.target.value)
            selectBill(newBill);
            console.log(bill);

        }
    };

    const handlePeopleChange = e => {
        if (e.target) {
            selectPeople(e.target.value);
        }
    };

    return (
        <section className="container calculator">
            <div className="input__span">
                <h3>Bill</h3>
                <span id="input__message" className="hidden">
                    Must be a number
                </span>
            </div>
            <input
                id="entry"
                className="input__main"
                value={bill}
                type="number"
                onChange={handleBillChange}
            />

            <h3>Select Tip %</h3>

            <div id="tipSelect">
                {tipButtons}
                <button className="customPercent" value="">
                    Custom
                </button>
            </div>

            <input
                id="customInput"
                className="percentSelect hidden"
                type="number"
            // value={people}
            />

            <div className="input__span">
                <h3>Number of People</h3>
                <span id="input__message" className="hidden">
                    Must be a number
                </span>
            </div>

            <input
                type="number"
                className="input__main"
                value={people}
                id="people"
                onChange={handlePeopleChange}
            />
        </section>
    );
}
