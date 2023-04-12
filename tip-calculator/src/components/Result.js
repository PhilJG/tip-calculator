export default function Result({ tip, bill, people }) {
    const tipResult = function () {
        let tipr = (bill * tip) / people;
        if (isNaN(tipr)) {
            tipr = 0;
        }
        return tipr;
    };

    const totalResult = function () {
        //should be the (total bill) + (tip % of total bill) / # of people ordering
        let totlr = (bill + (bill * tip)) / people;



        if (isNaN(totlr)) {
            totlr = 0;
        }

        return totlr;
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