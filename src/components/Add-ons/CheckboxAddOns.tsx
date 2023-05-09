import { useState } from "react";
import { AddOn } from "./AddOns";
import checkmark from "../../assets/images/icon-checkmark.svg";
// import advancedSvg from "../../assets/images/icon-advanced.svg";

interface Props {
  addOn: AddOn;
  enabled: boolean;
  checked: boolean;
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxAddOns = ({ addOn, enabled, checked }: Props) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked((current) => !current);
  };

  console.log(isChecked, "checked");

  return (
    <div
      className={`${
        isChecked ? "border-publishBlue bg-alabaster" : "border-magnolia"
      }
       flex justify-between items-center  py-5 px-4 rounded-lg  border-2  cursor-pointer xl:justify-start xl:gap-12 xl:relative hover:border-publishBlue`}
      onClick={handleChange}
    >
      <div
        className={`grid h-6 w-6  place-items-center rounded ${
          isChecked
            ? "bg-violet"
            : "cursor-pointer border-2 border-lightGray dark:bg-darkGray"
        }`}
      >
        {isChecked && (
          <img
            src={checkmark}
            className="bg-publishBlue w-full h-full rounded"
            alt="Check mark"
          />
        )}
      </div>
      <div>
        <h3 className="text-sm text-marinBlue font-bold xl:text-lg">
          {addOn.title}
        </h3>
        <p className="text-coolGray text-xs xl:text-md">{addOn.description}</p>
      </div>
      <p className="text-publishBlue text-xs xl:text-md xl:absolute right-6">
        {enabled ? `+$${addOn.price.yearly}/yr` : `+$${addOn.price.monthly}/mo`}
      </p>
    </div>
  );
};

export default CheckboxAddOns;
