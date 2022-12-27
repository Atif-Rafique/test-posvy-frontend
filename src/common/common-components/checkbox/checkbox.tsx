import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

import { Error } from "@mui/icons-material";
import { ICheckBox } from "../../interfaces/checkbox-interfaces";

const CommonCheckBox: FC<ICheckBox> = (props: ICheckBox) => {
  const { name, label, value, error, touched, onChange, handleChange } = props;
  return (
    <>
      <Box
        className="checkbox-wrapper"
        display="flex"
        alignItems="center"
        gap="8px"
        flexDirection="row"
      >
        <input
          type="checkbox"
          className="checkbox"
          value={value}
          name={name}
          onChange={handleChange}
          // handleChange={handleChange}
        />
        <Typography
          className="fs-16 fw-400 primary-text-color lh-24 letter-0_2"
          ml="0.75rem"
        >
          By proceeding, you agree to the{" "}
          <span className="fs-16 lh-24 letter-0_2 primary-color">
            Terms and Conditions
          </span>
        </Typography>
      </Box>
      {error && touched && (
        <Typography
          mb={1}
          className="fs-18 fw-400 input-validation-error flex font-general-sans cursor-pointer"
          variant="body2"
        >
          <Error sx={{ fontSize: "25px", paddingTop: "3px" }} />
          {error}
        </Typography>
      )}
    </>
  );
};

export default CommonCheckBox;
