import React from "react";
import Button from "../../../components/shared/button/Button";

const StepName = ({ onNext }) => {
  return (
    <div>
      step name
      <Button label="next" onClick={onNext}></Button>
    </div>
  );
};

export default StepName;
