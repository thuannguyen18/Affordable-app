import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface FormState {
    isOpen: boolean;
    isSignIn: boolean;
    isSignUp: boolean;
    forgotPassword: boolean;
};

const initialState: FormState = {
    isOpen: false,
    isSignIn: true,
    isSignUp: false,
    forgotPassword: false,
};

export const formSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        navigate: (state, action: PayloadAction<string>) => {
            state.isSignIn = false;
            if (action.payload === "SignUp") {
                state.isSignUp = true;
            }
            if (action.payload === "Forgot") {
                state.forgotPassword = true;
            }
        },
        back: (state) => {
            state.isSignIn = true;
            state.isSignUp = false;
            state.forgotPassword = false;
        },
        toggle: (state) => {
            state.isOpen = !state.isOpen;
        }
    }
});

export const { navigate, back, toggle } = formSlice.actions;

export default formSlice.reducer;