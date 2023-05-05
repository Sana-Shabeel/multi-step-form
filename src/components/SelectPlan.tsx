import Headline from "./Headline";
import PlanOption from "./PlanOptions";

const SelectPlan = () => {
  return (
    <div className="w-[343px] -mt-20 mx-auto bg-white py-6 px-4 rounded-md grid grid-cols-1 gap-6">
      <Headline
        title="Select youir plan"
        description="You have the option of monthly or annual billing."
      />
      <div className="flex justify-between">
        <PlanOption />
      </div>
    </div>
  );
};

export default SelectPlan;
