import * as Yup from "yup";
import { ISignInInterface, ISignUpInterface } from "../../common/interfaces/auth-interfaces";

//  Sign Up
export const signUpInitialValues: ISignUpInterface = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  termsAndConditions: false,
};

export const signUpFormValidations = Yup.object({
  firstName: Yup.string().required("Required Field"),
  lastName: Yup.string().required("Required Field"),
  email: Yup.string().required("Required Field").email(),
  password: Yup.string().required("Required Field"),
  termsAndConditions: Yup.bool().oneOf(
    [true],
    "You must accept the Terms & Conditions"
  ),
});



// Sign In 

export const signInInitialValues: ISignInInterface = {
  email: "",
  password: "",
};

export const signInFormValidations = Yup.object({
  email: Yup.string().required("Required Field").email(),
  password: Yup.string().required("Required Field"),
});
