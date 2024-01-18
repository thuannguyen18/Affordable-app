import { Fragment, ReactNode } from "react";

type FormInputProps = {
    type?: string;
    placeholder?: string;
    name?: string;
    message?: string;
    value?: any;
    children?: JSX.Element | ReactNode;
    touched?: any;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

function FormInput(props: FormInputProps): JSX.Element {
    // Props
    const { type, placeholder, name, message, value, children, touched, onChange } = props;
    // Check error from input
    const error = (message && value) || (message && touched);
    return (
        <Fragment>
            <div className={`flex items-center border ${error ? "border-red" : "border-tx-3"} rounded-md px-2 py-3 mt-5`}>
                {children}
                <input
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    className="w-full px-2 pt-0.5 outline-none text-sm"
                    onChange={onChange}
                />
            </div>
            <p className={`mt-1 text-sm ${message && "text-red"}`}>{error ? message : ""}</p>
        </Fragment>
    );
}

export default FormInput;