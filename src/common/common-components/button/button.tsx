import { CircularProgress } from "@mui/material";

const CommonButton = (props: any) => {
  const { type, value, width, classNames, flexClasses, ml, whenToShow } = props;
  return (
    <button
      type={type}
      className={`${width} ${classNames} ${flexClasses}  fs-16 fw-700 lh-24 letter-0_3 font-general-sans common-btn h-56 w-100 position-relative`}
    >
      {!!whenToShow && (
        <span
          style={{
            marginTop: "0.3rem",
            marginLeft: `${ml}`,
            position: "absolute",
          }}
        >
          <CircularProgress size={20} thickness={4} className="white-color" />
        </span>
      )}{" "}
      {value}
    </button>
  );
};

export default CommonButton;
