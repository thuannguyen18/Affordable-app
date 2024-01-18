import { Formik } from "formik";
import { MdOutlineMailLock } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { navigate } from "src/redux/formSlice";
import { useLoginMutation } from "src/services/form.service";
import iconGoogle from "src/assets/images/google-icon.png";
import { formLoginValidation } from "../FormValidation";
import FormInput from "./FormInput";
import FormPolicy from "./FormPolicy";
import "./Form_Authen.css";

interface FormValues {
    email: string;
    password: string;
};

const initialValues: FormValues = {
    email: "",
    password: "",
}

type Props = { dispatch?: any }

function FormSignIn({ dispatch }: Props) {
    // Using RTK Query
    const [login, loginResults] = useLoginMutation();

    return (
        <div className="inline-block w-[500px] px-[45px] pt-[40px] pb-[24px]">
            {/* FORM HEADING */}
            <div className="mb-5">
                <h4 className=" mb-1 text-2xl font-semibold">Hello!</h4>
                <p className="">Sign in to your account</p>
            </div>

            {/* FORM SIGN IN */}
            <Formik<FormValues>
                initialValues={initialValues}
                validationSchema={formLoginValidation}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    login(values);
                }}
            >
                {({ values, errors, touched, handleChange, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
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
                        <button type="submit" className="w-full my-5 py-2.5 bg-red text-white rounded-md text-lg hover:opacity-80">Sign in</button>
                    </form>
                )}
            </Formik>

            {/* FORM DIRECT USER */}
            <div className="mb-3">
                <button className="text-[13px] text-blue-300" onClick={() => dispatch(navigate("Forgot"))}>Forgot your password?</button>
                <div className="mt-1">
                    <span className="text-[13px] mr-2 text-tx-1">New to Affordable?</span>
                    <button className="text-[13px] text-blue-300" onClick={() => dispatch(navigate("SignUp"))}>Create your account</button>
                </div>
            </div>

            {/* FORM HORIZONTAL LINE */}
            <p className="social-heading">
                <span className="text-price">OR</span>
            </p>

            {/* FORM SOCIAL SIGN IN */}
            <button className="w-full border border-gray-blur rounded-md shadow py-2 flex items-center justify-center mb-2.5 hover:bg-background">
                <img src={iconGoogle} alt="google-logo" className="w-8 h-8" />
                <span className="text-sm pt-0.5">Continue with Google</span>
            </button>

            {/* FORM POLICY */}
            <FormPolicy action="continuing" />
        </div>
    );
}

export default FormSignIn;