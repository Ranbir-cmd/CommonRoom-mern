import React, { useState } from "react";
import StepPhoneEmail from "../steps/stepPhoneEmail/StepPhoneEmail";
import StepOtp from "../steps/stepOtp/StapeOtp";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Login = () => {
  const [step, setStep] = useState(1);

  const Step = steps[step];

  const onNext = () => {
    setStep(step + 1);
  };
  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Login;