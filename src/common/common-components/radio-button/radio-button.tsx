import { Radio, RadioProps, styled } from "@mui/material";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: "50%",
  width: 18,
  height: 18,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#0caf60",
  "&:before": {
    display: "block",
    width: 18,
    height: 18,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
});
const CommonRadioButton = (props: RadioProps) => {
  return (
    <Radio
      checkedIcon={<BpCheckedIcon />}
      sx={{
        color: "#0caf60",
        "&:hover": {
          backgroundColor: "#0caf601a;",
        },
        "&.Mui-checked": {
          color: "#0caf60",
        },
      }}
      icon={<BpIcon />}
      {...props}
    />
  );
};

export default CommonRadioButton;
