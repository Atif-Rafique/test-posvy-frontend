import { Alert, FormControlLabel, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import CommonButton from "../../common/common-components/button/button";
import CommonInput from "../../common/common-components/input/input";
import CommonPasswordInput from "../../common/common-components/input/input-password";
import CommonRadioButton from "../../common/common-components/radio-button/radio-button";
import Auth from "../../components/auth/auth";
import { signInInitialValues, signInFormValidations } from "./auth-form-schema";

const SignIn = () => {
  const router = useRouter();
  const [pageState, setPageState] = useState({
    error: "",
    processing: false,
  });

  // simplify next auth error
  const simplifyError = (error: any) => {
    const errorMap: any = {
      CredentialsSignin:
        "Default email: salesline@abc.com and password: Salesline@123",
    };
    return errorMap[error] ?? "Unknown error occurred";
  };

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
    initialValues: signInInitialValues,
    validationSchema: signInFormValidations,
    onSubmit: async (formValues: any) => {
      console.log("Sign in form data", formValues);
      const { email, password } = formValues;

      await signIn("credentials", {
        email,
        password,
        redirect: false,
      })
        .then((response: any) => {
          console.log(response);

          if (response.ok) {
            // authenticate user
            router.push("/dashboard");
          } else {
            console.log("rssponse error", response.error);
            setPageState((old) => ({
              ...old,
              processing: false,
              error: response.error,
            }));
          }
        })
        .catch((error) => {
          console.log("catch error", error);
          setPageState((old) => ({
            ...old,
            processing: false,
            error: error.message ?? "Something went wrong",
          }));
        });
      resetForm();
    },
  });

  return (
    <Auth>
      {pageState.error !== "" && (
        <Alert severity="error" sx={{ mb: 2, borderRadius: "12px" }}>
          {simplifyError(pageState.error)}
        </Alert>
      )}

      <h2 className="fs-32 fw-700 primary-text-color">Login to your account</h2>
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing="1.5rem" columnSpacing="1rem">
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
            <Grid container alignItems="center" justifyContent="space-between">
              <FormControlLabel
                value="rememberMe"
                control={<CommonRadioButton />}
                label={
                  <Typography
                    fontSize="16px"
                    fontWeight={400}
                    lineHeight="24px"
                    letterSpacing={0.2}
                    color="#111827"
                    sx={{ fontFamily: "General Sans, sans-serif" }}
                  >
                    Remember Me
                  </Typography>
                }
                sx={{}}
              />
              <h3 className="fs-16 fw-400 font-general-sans letter-0_2 lh-24 primary-color cursor-pointer">
                Forgot password?
              </h3>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <CommonButton type="submit" value="Sign in with email" />
          </Grid>

          <Grid item xs={12}>
            <p>
              Don't have an account?{" "}
              <span>
                <Link
                  href="/auth/sign-up"
                  className="fs-16 fw-700 letter-0_3 primary-color  primary-color"
                  style={{ textDecoration: "none" }}
                >
                  Get Started
                </Link>
              </span>
            </p>
          </Grid>
        </Grid>
      </form>
    </Auth>
  );
};

export default SignIn;
