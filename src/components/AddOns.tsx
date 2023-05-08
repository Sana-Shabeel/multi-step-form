import { useState } from "react";
import CheckboxAddOns from "./CheckboxAddOns";
import Headline from "./Headline";

export interface AddOn {
  id: number;
  title: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

const addOns: AddOn[] = [
  {
    id: 1,
    title: "Online services",
    description: "Access to multiplayer games",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    id: 2,
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    id: 3,
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];

interface Props {
  enabled: boolean;
}

const AddOns = ({ enabled }: Props) => {
  return (
    <div className="w-[343px] md:w-[450px] -mt-20 mx-auto bg-white py-6 px-4 rounded-md grid grid-cols-1 gap-6">
      <Headline
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience"
      />
      {addOns.map((addOn) => (
        <CheckboxAddOns
          key={addOn.id}
          addOn={addOn}
          enabled={enabled}
          checkboxId={addOn.title}
        />
      ))}
    </div>
  );
};

export default AddOns;
