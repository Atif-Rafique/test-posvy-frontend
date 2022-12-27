import { Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import CommonButton from "../../common/common-components/button/button";
import CommonCheckBox from "../../common/common-components/checkbox/checkbox";
import CommonInput from "../../common/common-components/input/input";
import CommonPasswordInput from "../../common/common-components/input/input-password";
import Auth from "../../components/auth/auth";
import { signUpInitialValues, signUpFormValidations } from "./auth-form-schema";

const SignUp = () => {
  // Formik
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: signUpInitialValues,
    validationSchema: signUpFormValidations,
    onSubmit: (formValues: any) => {
      console.log("Sign up form data", formValues);
      values.termsAndConditions = false;
      resetForm();
    },
  });

  return (
    <Auth>
      <h2 className="fs-32 fw-700 primary-text-color">
        Create your Salesline ID
      </h2>
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing="1.5rem" columnSpacing="1rem">
          <Grid item xs={6}>
            <CommonInput
              label=""
              name="firstName"
              type="text"
              placeholder="First name"
              value={values.firstName}
              error={errors.firstName}
              touched={touched.firstName}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={6}>
            <CommonInput
              label=""
              name="lastName"
              type="text"
              placeholder="Last name"
              value={values.lastName}
              error={errors.lastName}
              touched={touched.lastName}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <CommonInput
              label=""
              name="email"
              type="email"
              placeholder="Email"
              value={values.email}
              error={errors.email}
              touched={touched.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <CommonPasswordInput
              label=""
              name="password"
              type="Password"
              placeholder="Password"
              value={values.password}
              error={errors.password}
              touched={touched.password}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </Grid>
          <Grid item xs={12}>
            <CommonCheckBox
              label=""
              name="termsAndConditions"
              value={values.termsAndConditions}
              error={errors.termsAndConditions}
              touched={touched.termsAndConditions}
              handleChange={handleChange}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <CommonButton type="submit" value="Sign up with email" />
          </Grid>
          <Grid item xs={12}>
            <p>
              Already have an account?{" "}
              <span
                className="fs-16 fw-700 letter-0_3 primary-color cursor-pointer"
                onClick={() => signIn()}
              >
                Sign In
              </span>
            </p>
          </Grid>
        </Grid>
      </form>
    </Auth>
  );
};

export default SignUp;
