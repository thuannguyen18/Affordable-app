import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../redux/store";
import FormSignIn from "./FormSignIn";
import FormSignUp from "./FormSignUp";
import FormForgotPw from "./FormForgotPw";

function FormAuthen(): JSX.Element {
    const { isSignIn, isSignUp, forgotPassword } = useSelector((state: RootState) => state.authentication);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            {isSignUp && <FormSignUp dispatch={dispatch} />}
            {isSignIn && <FormSignIn dispatch={dispatch} />}
            {forgotPassword && <FormForgotPw dispatch={dispatch} />}
        </React.Fragment>
    );
}

export default FormAuthen;