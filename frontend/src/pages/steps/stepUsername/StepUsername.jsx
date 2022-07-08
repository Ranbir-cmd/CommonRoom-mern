import React from "react";
import Button from "../../../components/shared/button/Button";

const StepUsername = ({ onNext }) => {
  return (
    <div>
      StepUsername
      <Button label="next" onClick={onNext}></Button>
    </div>
  );
};

export default StepUsername;
