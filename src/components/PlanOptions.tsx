import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import arcade from "../assets/images/icon-arcade.svg";

const plans = [
  {
    name: "Arcade",
    price: "$9/mo",
    icon: "../assets/images/icon-arcade.svg",
  },
  {
    name: "Advanced",
    price: "$12/mo",
    icon: "../assets/images/icon-advanced.svg",
  },
  {
    name: "Pro",
    price: "$15/mo",
    icon: "../assets/images/icon-pro.svg",
  },
];

export default function Example() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="w-full">
      <div>
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-3">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${active ? " border-pasteBlue" : ""}
                  ${checked ? "bg-magnolia border-pasteBlue" : ""}
                    relative flex cursor-pointer rounded-lg px-5 py-4 focus:outline-none border-2`
                }
              >
                <>
                  <div className="flex w-full items-center gap-2 border border-red">
                    <div>
                      <img src={plan.icon} alt={`icon ${plan.name}`} />
                    </div>
                    <div>
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-bold text-xl`}
                        >
                          {plan.name}
                        </RadioGroup.Label>
                        <RadioGroup.Description
                          as="span"
                          className={`inline text-coolGray`}
                        >
                          <span>{plan.price}</span>
                        </RadioGroup.Description>
                      </div>
                    </div>
                  </div>
                </>
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
