import { Formik } from 'formik';
import { MdOutlineMailLock, MdOutlineArrowBackIos } from "react-icons/md";

import { ForgotPasswordValidation } from '../FormValidation';
import { back } from '../../../redux/formSlice';
import FormInput from "./FormInput";

interface FormValues {
    email: string;
};

type Props = {
    dispatch?: any;
}

function FormForgotPw({ dispatch }: Props): JSX.Element {
    const initialValues: FormValues = {
        email: "",
    };

    return (
        <div className="inline-block w-[500px] px-[45px] py-[40px]">
            {/* FORM FORGOT PASSWORD HEADING */}
            <div className="mb-5">
                <button className="block mb-5" onClick={() => dispatch(back())}>
                    <MdOutlineArrowBackIos className="text-2xl text-tx-2" />
                </button>
                <h4 className="text-2xl mb-2.5 font-semibold">Forgot password ?</h4>
                <p className="text-[15px]">Enter the email address associated with your Affordable account to get your password back.</p>
            </div>

            {/* FORM FORGOT PASSWORD CONTENT*/}
            <Formik<FormValues>
                initialValues={initialValues}
                validationSchema={ForgotPasswordValidation}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                }}
            >
                {({ values, errors, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            type="email"
                            placehoder="E-mail"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            message={errors.email}
                            error={errors.email}
                        >
                            <MdOutlineMailLock className="text-2xl text-tx-3" />
                        </FormInput>
                        <button type="submit" className="w-full mt-6 py-2.5 bg-red text-white rounded-md text-lg hover:opacity-80">Continue</button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default FormForgotPw;