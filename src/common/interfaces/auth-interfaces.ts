// Sign Up Form Interfaces
export interface ISignUpInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  termsAndConditions: boolean | string;
}


export interface ISignInInterface {
  email: string;
  password: string;
}