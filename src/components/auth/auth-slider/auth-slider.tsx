import { Box } from "@mui/material";
import IllustrationImg from "../../../assets/images/common/Illustration.png";
import Image from "next/image";

const AuthSlider = () => {
  return (
    <Box maxWidth={{ xs: "573px" }} ml="auto" textAlign="center">
      <Image
        src={IllustrationImg}
        alt="IllustrationImg"
        // width={573}
        // height={471}
        priority
      />
      <Box width="472px" m="auto">
        <h2
          className="fs-40 fw-700 lh-48 white-color text-center"
          style={{
            lineHeight: "120%",
            marginBottom: "1.5em",
          }}
        >
          The easiest way to build your own eCommerce
        </h2>
        <p className="fs-18 fw-500 lh-27 text-center light-white-color">
          Create an ecommerce website backed by powerful tools that help you
          find customers, drive sales, and manage your day-to-day.
        </p>
      </Box>
    </Box>
  );
};

export default AuthSlider;
