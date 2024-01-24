import { Fragment, useState, useRef, useEffect } from "react";

function CountDownTimer(): JSX.Element {
    const [flashSaleDuration] = useState(2 * 60 * 60 * 1000); // Flash sale duration in milliseconds (2 hours)
    const [timeRemaining, setTimeRemaining] = useState(flashSaleDuration);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            // Update the time remaining every second
            setTimeRemaining((prevTime) => prevTime - 1000);
        }, 1000);

        // Clean up the interval when the component unmounts
        return () => clearInterval(timerInterval);
    }, []);

    const content = (milliseconds: number): JSX.Element => {
        const hours = Math.floor(milliseconds / 3600000);
        const minutes = Math.floor((milliseconds % 3600000) / 60000);
        const seconds = Math.floor((milliseconds % 60000) / 1000);
        return (
            <Fragment>
                <span className="min-w-[25px] mx-1 px-1 rounded bg-red text-white">{String(hours).padStart(2, '0')}</span>
                <span className="font-semibold">:</span>
                <span className="min-w-[25px] mx-1 px-1 rounded bg-red text-white">{String(minutes).padStart(2, '0')}</span>
                <span className="font-semibold">:</span>
                <span className="min-w-[25px] mx-1 px-1 rounded bg-red text-white">{String(seconds).padStart(2, '0')}</span>
            </Fragment>
        );
    };

    return content(timeRemaining);
}

export default CountDownTimer;