import React, { ReactElement } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [step, setStep] = React.useState(0);

  const nextStep = () => {
    setStep((i) => {
      if (i === steps.length - 1) return i;
      return i + 1;
    });
  };
  const prevStep = () => {
    setStep((i) => {
      if (i === 0) return i;
      return i - 1;
    });
  };

  return {
    step,
    steps,
    nextStep,
    prevStep,
  };
}
