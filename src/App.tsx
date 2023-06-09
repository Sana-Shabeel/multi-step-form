import { useContext, useState } from "react";
import AddOns from "./components/Add-ons/AddOns";
import FinishingUp from "./components/FinishingUp";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import Sidebar from "./components/Sidebar";
import ThankYou from "./components/ThankYou";
import { FormDataContext } from "./context/FormDataContext";
import { useMultistepForm } from "./hooks/useMultistepForm";

function App() {
  const [enabled, setEnabled] = useState(false);
  const { formData, validateFormData } = useContext(FormDataContext);

  const { step, steps, nextStep, prevStep } = useMultistepForm([
    <PersonalInfo />,
    <SelectPlan enabled={enabled} setEnabled={setEnabled} />,
    <AddOns enabled={enabled} />,
    <FinishingUp yearly={enabled} />,
    <ThankYou />,
  ]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData, formData);

    if (validateFormData()) {
      nextStep();
    }
  };

  return (
    <main className="h-screen bg-magnolia xl:grid place-items-center">
      <form
        onSubmit={onSubmit}
        className="xl:w-[940px] xl:mx-auto xl:p-4 xl:rounded-md xl:h-[600px] xl:bg-white xl:flex gap-20"
      >
        <Header step={step} />
        <Sidebar step={step} />
        <div>
          {steps[step]}
          <Footer back={prevStep} step={step} />
        </div>
      </form>
    </main>
  );
}

export default App;
