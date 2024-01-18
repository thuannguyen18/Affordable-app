import { Formik } from 'formik';
import { MdOutlineMailLock, MdOutlineArrowBackIos } from "react-icons/md";
import { RiLockPasswordLine, RiUserLine } from "react-icons/ri";
import { back } from 'src/redux/formSlice';
import { useSignUpMutation } from 'src/services/form.service';
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

    const [signUp, signUpResults] = useSignUpMutation();

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
                    signUp(values);
                }}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <FormInput
                            type="text"
                            placeholder="Your name"
                            name="username"
                            value={values.username}
                            onChange={handleChange}
                            message={errors.username}
                            touched={touched.username}
                        >
                            <RiUserLine className="text-2xl text-tx-3" />
                        </FormInput>
                        <FormInput
                            name="email"
                            placeholder="E-mail"
                            value={values.email}
                            onChange={handleChange}
                            message={errors.email}
                            touched={touched.email}
                        >
                            <MdOutlineMailLock className="text-2xl text-tx-3" />
                        </FormInput>
                        <FormInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            message={errors.password}
                            touched={touched.password}
                        >
                            <RiLockPasswordLine className="text-2xl text-tx-3" />
                        </FormInput>
                        <FormInput
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={values.confirmPassword}
                            onChange={handleChange}
                            message={errors.confirmPassword}
                            touched={touched.confirmPassword}
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