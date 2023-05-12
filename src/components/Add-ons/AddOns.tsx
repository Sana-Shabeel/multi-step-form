import { useState } from "react";
import Headline from "../Headline";
import CheckboxAddOns from "./CheckboxAddOns";

export interface AddOn {
  id: number;
  title: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  checked: boolean;
}

const pickAddOns: AddOn[] = [
  {
    id: 1,
    title: "Online services",
    description: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10,
    },
    checked: true,
  },
  {
    id: 2,
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: {
      monthly: 2,
      yearly: 20,
    },
    checked: true,
  },
  {
    id: 3,
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
    checked: false,
  },
];

interface Props {
  enabled: boolean;
}

const AddOns = ({ enabled }: Props) => {
  const [addOn, setAddOn] = useState(pickAddOns);

  const handleChange = (id: number) => {
    setAddOn((prev) =>
      prev.map((addOn) =>
        id === addOn.id ? { ...addOn, checked: !addOn.checked } : addOn
      )
    );

    console.log("handleChange");
  };

  return (
    <div className="w-[343px] sm:w-[70%] lg:w-[50%] -mt-20 mx-auto bg-white py-6 px-4 rounded-md grid grid-cols-1 gap-6 xl:mx-0 xl:m-12 xl:w-[450px] xl:p-0 xl:h-96">
      <Headline
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />
      {addOn.map((addOn) => (
        <CheckboxAddOns
          key={addOn.id}
          addOn={addOn}
          enabled={enabled}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
};

export default AddOns;
