import React, { ReactNode } from "react";

type FormInputProps = {
    type?: string;
    placehoder?: string;
    name?: string;
    message?: string;
    error?: boolean | string;
    value?: any;
    onChange?: any;
    children?: JSX.Element | ReactNode;
};

function FormInput(props: FormInputProps): JSX.Element {
    const { type, placehoder, name, message, error, value, onChange, children } = props;
    const errorTextColor = error && "text-red";
    const errorBorderColor = error ? "border-red" : "border-tx-3";

    return (
        <React.Fragment>
            <div className={`flex items-center border ${errorBorderColor} rounded-md px-2 py-3 mt-5`}>
                {children}
                <input
                    value={value}
                    type={type}
                    placeholder={placehoder}
                    name={name}
                    className="w-full px-2 pt-0.5 outline-none text-sm"
                    onChange={onChange}
                />
            </div>
            <p className={`mt-1 text-sm ${errorTextColor}`}>{message}</p>
        </React.Fragment>
    );
}

export default FormInput;