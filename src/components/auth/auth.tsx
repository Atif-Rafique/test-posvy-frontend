import AuthHeader from "./auth-header/auth-header";
import AuthSlider from "./auth-slider/auth-slider";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Auth = (props: IProps) => {
  return (
    <Box
      sx={{
        background: {
          xs: "#FFFF",
          md: "linear-gradient(to right, #ffff 50%, #0caf60 50%)",
        },
        minHeight: {
          xs: "100%",
          md: "100vh",
        },
      }}
    >
      <Box margin="auto 6.25rem">
        <AuthHeader />
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box maxWidth={{ xs: "100%", md: "486px" }}>
              {props.children}
            </Box>
          </Grid>

          <Grid item md={6} display={{ xs: "none", md: "block" }}>
            <Box maxWidth="754px" m="auto">
              <AuthSlider />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Auth;
