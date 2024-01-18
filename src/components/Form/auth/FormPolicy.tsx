import { Link } from "react-router-dom";

type Props = { action: string; };

function FormPolicy(props: Props): JSX.Element {
    return (
        <p className="mt-2.5 text-xs text-tx-1">
            <span>By {props.action}, you agree to Affordable's
                <Link to="/" className="ml-1 underline">Conditions of Use</Link>
                <span className="mx-1">and</span>
                <Link to="/" className="underline"> Privacy Notice.</Link>
            </span>
        </p>
    );
}

export default FormPolicy;