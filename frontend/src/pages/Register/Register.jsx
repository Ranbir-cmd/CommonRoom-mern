import React, { useState } from "react";
import styles from "./Register.module.css";
import StepUsername from "../steps/stepUsername/StepUsername";
import StepOtp from "../steps/stepOtp/StapeOtp";
import StepAvatar from "../steps/stepAvatar/StepAvatar";
import StepName from "../steps/stepName/StepName";
import StepPhoneEmail from "../steps/stepPhoneEmail/StepPhoneEmail";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUsername,
};

const Register = () => {
  const [step, setStep] = useState(1);

  const Step = steps[step];

  const onNext = () => {
    setStep(step + 1);
  };

  return (
    <div>
      {/* so this component is responsible for rendering every component depending on the value of step  */}
      <Step onNext={onNext} />
    </div>
  );
};

export default Register;
