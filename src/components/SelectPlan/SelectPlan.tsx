import Headline from "../Headline";
import PlanOption from "./PlanOptions";
import Switch from "../Switch";

interface Props {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const SelectPlan = ({ enabled, setEnabled }: Props) => {
  return (
    <div className="w-[343px] sm:w-[70%] lg:w-[50%] -mt-20 mx-auto bg-white py-6 px-4 rounded-md grid grid-cols-1 gap-6 xl:mx-0 xl:m-12 xl:w-[450px] xl:p-0 xl:h-96">
      <Headline
        title="Select your plan"
        description="You have the option of monthly or annual billing."
      />
      <div className="">
        <PlanOption enabled={enabled} />
      </div>
      <div className="flex justify-center items-center gap-4 bg-magnolia py-4 rounded-lg">
        <p
          className={`${
            enabled == false ? "text-marineBlue" : "text-coolGray"
          } text-sm`}
        >
          Monthly
        </p>
        <Switch enabled={enabled} setEnabled={setEnabled} />
        <p
          className={`${enabled ? "text-marineBlue" : "text-coolGray"} text-sm`}
        >
          Yearly
        </p>
      </div>
    </div>
  );
};

export default SelectPlan;
