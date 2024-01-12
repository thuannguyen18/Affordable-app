import { Formik } from 'formik';
import { MdOutlineMailLock, MdOutlineArrowBackIos } from "react-icons/md";
import { RiLockPasswordLine, RiUserLine } from "react-icons/ri";

import { back } from '../../../redux/formSlice';
import { formSignUpValidation } from '../FormValidation';
import FormInput from './FormInput';
import FormPolicy from './FormPolicy';

interface FormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
};

type Props = {
    dispatch?: any;
}

function FormSignUp({ dispatch }: Props): JSX.Element {
    const initialValues: FormValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    };

    return (
        <div className="inline-block w-[500px] px-[45px] pt-[40px] pb-[24px]">
            {/* FORM SIGN UP HEADING */}
            <div className="mb-5">
                <button className="block mb-5" onClick={() => dispatch(back())}>
                    <MdOutlineArrowBackIos className="text-2xl text-tx-2" />
                </button>
                <h4 className="text-2xl">Create Account</h4>
            </div>

            {/* FORM SIGN UP CONTENT*/}
            <Formik<FormValues>
                initialValues={initialValues}
                validationSchema={formSignUpValidation}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                }}
            >
                {({ values, errors, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            type="text"
                            placehoder="Your name"
                            name="username"
                            message={errors.username}
                            error={errors.username}
                            value={values.username}
                            onChange={handleChange}
                        >
                            <RiUserLine className="text-2xl text-tx-3" />
                        </FormInput>
                        <FormInput
                            placehoder="E-mail"
                            name="email"
                            message={errors.email}
                            error={errors.email}
                            value={values.email}
                            onChange={handleChange}
                        >
                            <MdOutlineMailLock className="text-2xl text-tx-3" />
                        </FormInput>
                        <FormInput
                            type="password"
                            placehoder="Password"
                            name="password"
                            message={errors.password}
                            error={errors.password}
                            value={values.password}
                            onChange={handleChange}
                        >
                            <RiLockPasswordLine className="text-2xl text-tx-3" />
                        </FormInput>
                        <FormInput
                            type="password"
                            placehoder="Confirm Password"
                            name="confirmPassword"
                            message={errors.confirmPassword}
                            error={errors.confirmPassword}
                            value={values.confirmPassword}
                            onChange={handleChange}
                        >
                            <RiLockPasswordLine className="text-2xl text-tx-3" />
                        </FormInput>
                        <button
                            type="submit"
                            className="w-full mt-6 py-2.5 bg-red text-white rounded-md text-lg hover:opacity-80"
                        >
                            Sign up
                        </button>
                    </form>
                )}
            </Formik>

            {/* FORM POLICY */}
            <FormPolicy action="creating an account" />
        </div>
    );
}

export default FormSignUp;