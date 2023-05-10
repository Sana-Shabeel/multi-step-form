import { SetStateAction, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ThankYou from "./components/ThankYou";
import { useMultistepForm } from "./hooks/useMultistepForm";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import AddOns from "./components/Add-ons/AddOns";
import FinishingUp from "./components/FinishingUp";

function App() {
  const [enabled, setEnabled] = useState(false);

  const { step, steps, nextStep, prevStep } = useMultistepForm([
    <PersonalInfo />,
    <SelectPlan enabled={false} setEnabled={setEnabled} />,
    <AddOns enabled={enabled} />,
    <FinishingUp />,
    <ThankYou />,
  ]);
  console.log(step);

  return (
    <main className="h-screen bg-magnolia xl:grid place-items-center">
      <div className="xl:hidden">
        <Header step={step} />
        {steps[step]}
        <Footer next={nextStep} back={prevStep} step={step} />
      </div>

      {/* at 1440px */}
      <div className="hidden w-[940px] mx-auto p-4 rounded-md h-[600px] bg-white xl:flex gap-20">
        <Sidebar step={step} />
        <div>
          {steps[step]}
          <Footer next={nextStep} back={prevStep} step={step} />
        </div>
      </div>
    </main>
  );
}

export default App;
