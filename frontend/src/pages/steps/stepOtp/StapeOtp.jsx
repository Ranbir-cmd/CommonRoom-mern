import React from "react";
import Button from "../../../components/shared/button/Button";

const StapeOtp = ({ onNext }) => {
  return (
    <div>
      otp
      <Button label="next" onClick={onNext}></Button>
    </div>
  );
};

export default StapeOtp;
