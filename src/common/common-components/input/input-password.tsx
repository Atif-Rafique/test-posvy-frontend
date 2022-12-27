import {
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";

import { Error } from "@mui/icons-material";
import Image from "next/image";
import hidePasswordIcon from "../../../assets/images/auth/eye-off.png";
import showPasswordIcon from "../../../assets/images/auth/eye.png";
import { ICOMMONINPUT } from "../../interfaces/common-input-interfaces";

const CommonPasswordInput: FC<ICOMMONINPUT> = (props: ICOMMONINPUT) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const {
    name,
    label,
    type,
    value,
    placeholder,
    error,
    touched,
    handleBlur,
    handleChange,
  } = props;
  return (
    <>
      <InputLabel
        className={`${
          error && touched && " input-validation-error"
        } fs-18 text-capitalize fw-700 line-height-24 primary-text-color`}
        htmlFor={label}
      >
        {label}
      </InputLabel>
      <TextField
        fullWidth
        name={name}
        placeholder={placeholder}
        type={isShowPassword ? "text" : "password"}
        variant="outlined"
        value={value}
        onChange={(e) => handleChange(name)(e.target.value.trim())}
        onBlur={handleBlur}
        error={!!(error && touched)}
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                width: "40px",
                // marginRight: { sm: "0.5rem" },
              }}
            >
              {isShowPassword ? (
                <Image
                  src={showPasswordIcon}
                  alt="Password show"
                  width={24}
                  height={24}
                  priority
                  className="cursor-pointer half-opacity"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  style={{ objectFit: "fill" }}
                />
              ) : (
                <Image
                  src={hidePasswordIcon}
                  alt="Password hide"
                  width={24}
                  height={24}
                  priority
                  className="cursor-pointer half-opacity"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  style={{ objectFit: "fill" }}
                />
              )}
            </InputAdornment>
          ),
        }}
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

export default CommonPasswordInput;
