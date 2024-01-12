import { Fragment } from "react";

function CountDownTimer(): JSX.Element {
    return (
        <Fragment>
            <span className="mx-1 px-1 rounded bg-red text-white">00</span>
            <span className="font-semibold">:</span>
            <span className="mx-1 px-1 rounded bg-red text-white">00</span>
            <span className="font-semibold">:</span>
            <span className="mx-1 px-1 rounded bg-red text-white">00</span>
        </Fragment>
    );
}

export default CountDownTimer;