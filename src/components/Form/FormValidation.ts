import * as yup from "yup";

export const formSignUpValidation = yup.object().shape({
    username: yup.string().trim().required("Please enter your name"),
    email: yup.string().required("Please enter your email").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Wrong or Invalid email address. Please correct and try again."),
    password: yup.string().trim().required("Minimum 6 characters required").min(6, "Your password is too short."),
    confirmPassword: yup.string().trim().oneOf([yup.ref('password')], "Passwords must match"),
});

export const formLoginValidation = yup.object().shape({
    email: yup.string().required("Please enter your email").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Wrong or Invalid email address. Please correct and try again."),
    password: yup.string().trim().required("Please enter your password"),
});

export const forgotPasswordValidation = yup.object().shape({
    email: yup.string().required("Please enter your email").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Wrong or Invalid email address. Please correct and try again."),
});

