import { useState } from "react";
import { AddOn } from "./AddOns";

interface Props {
  addOn: AddOn;
  enabled: boolean;
  checkboxId: string;
  // checked: boolean;
  // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxAddOns = ({ addOn, enabled, checkboxId }: Props) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      console.log("✅ Checkbox is checked");
    } else {
      console.log("⛔️ Checkbox is NOT checked");
    }
    setChecked((current) => !current);
  };
  return (
    <label
      className={`${
        checked ? "border-publishBlue" : "border-magnolia"
      } flex justify-between items-center  py-3 px-4 rounded-lg  border-2 `}
      htmlFor={checkboxId}
    >
      <input
        id={checkboxId}
        onChange={handleChange}
        type="checkbox"
        value=""
        className="w-6 h-6 text-blue-600 bg-gray-100 rounded-2xl focus:ring-0 focus:outline-none border "
      />
      <div>
        <h3 className="text-sm text-marinBlue font-bold">{addOn.title}</h3>
        <p className="text-coolGray text-xs">{addOn.description}</p>
      </div>
      <p className="text-publishBlue text-xs">
        {enabled ? `+$${addOn.price.yearly}/yr` : `+$${addOn.price.monthly}/mo`}
      </p>
    </label>
  );
};

export default CheckboxAddOns;
