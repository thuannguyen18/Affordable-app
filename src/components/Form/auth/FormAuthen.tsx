import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "src/redux/store";
import FormSignIn from "./FormSignIn";
import FormSignUp from "./FormSignUp";
import FormForgotPw from "./FormForgotPw";
import FormModal from "./FormLoader";

function FormAuthen(): JSX.Element {
    // States from redux
    const { isSignIn, isSignUp, isForgotPassword } = useSelector((state: RootState) => state.authentication);
    const dispatch = useDispatch();

    return (
        <Fragment>
            {isSignUp && <FormSignUp dispatch={dispatch} />}
            {isSignIn && <FormSignIn dispatch={dispatch} />}
            {isForgotPassword && <FormForgotPw dispatch={dispatch} />}
            {false && <FormModal />}
        </Fragment>
    );
}

export default FormAuthen;