import { IHandleChange } from "./common-input-interfaces";

export interface ICheckBox {
  name: string;
  label: any;
  value: any;
  error: any;
  touched: any;
  onChange: any;
  handleChange: IHandleChange | undefined;
}
