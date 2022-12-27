import { InputLabel, TextField, Typography } from "@mui/material";

import { Error } from "@mui/icons-material";
import { FC } from "react";
import { ICOMMONINPUT } from "../../interfaces/common-input-interfaces";

const CommonInput: FC<ICOMMONINPUT> = (props: ICOMMONINPUT) => {
  const {
    label,
    name,
    type,
    placeholder,
    value,
    error,
    touched,
    handleBlur,
    handleChange,
  } = props;
  return (
    <>
      {label && (
        <InputLabel
          className={`${
            error && touched && "input-valitaion-error"
          } fs-18 text-capitalize fw-700 line-height-24 primary-text-color`}
          htmlFor={label}
        >
          {label}
        </InputLabel>
      )}
      <TextField
        value={value}
        type={type ? type : "text"}
        fullWidth
        name={name}
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
        error={!!(error && touched)}
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
              borderColor: "#0caf60",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: 0,
          },
          "& fieldset": { border: 0 },
        }}
      />
      {error && touched && (
        <Typography
          className="fs-18 fw-400 input-validation-error flex align-center "
          variant="body2"
        >
          <Error sx={{ fontSize: "25px", paddingTop: "2px", mr: 1 }} />
          {error}
        </Typography>
      )}
    </>
  );
};

export default CommonInput;
