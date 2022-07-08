import React from "react";
import Button from "../../../components/shared/button/Button";

const StepAvatar = ({ onNext }) => {
  return (
    <div>
      StepAvatar
      <Button label="next" onClick={onNext}></Button>
    </div>
  );
};

export default StepAvatar;
