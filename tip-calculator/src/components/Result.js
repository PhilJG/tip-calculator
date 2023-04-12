export default function Result({ tip, bill, people }) {
    const tipResult = function () {
        const tipr = (bill * tip) / people;
        if (isNaN(tipr)) {
            tipr = 0;
        }
        return tipr;
    };

    const totalResult = function () {
        const totlr = (bill + (bill * tip)) / people;

        let total

        if (isNaN(totlr)) {
            total = 0;
        } else {
            total = totlr
        }

        return total;
    }

    return (
        <section className="result">
            <div className="result__total">
                <div className="result__total--units">
                    <h4>Tip Amount</h4>
                    <h5>/ person</h5>
                </div>
                <h1 className="result__total--tip">{tipResult()}</h1>
            </div>
            <div className="result__total">
                <div className="result__total--units">
                    <h4>Total</h4>
                    <h5>/ person</h5>
                </div>
                <h1 className="result__total--bill">{totalResult()}</h1>
            </div>

            <button id="reset">Reset</button>
        </section>
    );
}