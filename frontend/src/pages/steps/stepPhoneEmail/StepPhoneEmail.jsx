import React from "react";
import Button from "../../../components/shared/button/Button";

const StepPhoneEmail = ({ onNext }) => {
  return (
    <div>
      hello from ph email
      <Button onClick={onNext} label="next"></Button>
    </div>
  );
};

export default StepPhoneEmail;
