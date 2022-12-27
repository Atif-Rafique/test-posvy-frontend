import { StaticImageData } from "next/image";

// Formik Handle Blur
export interface IHandleBlur {
  (e: React.FocusEvent<any, Element>): void;
  <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
}

// Formik Handle Change
export interface IHandleChange {
  (e: React.ChangeEvent<any>): void;
  <T_1 = string | React.ChangeEvent<any>>(
    field: T_1
  ): T_1 extends React.ChangeEvent<any> ? void : (e: any) => void;
}

export interface ICOMMONINPUT {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value?: string | number;
  adornmentIcon?: StaticImageData;

  //   for formik
  error?: string | undefined;
  touched?: boolean | undefined;
  handleChange?: IHandleChange;
  handleBlur?: IHandleBlur;
}
