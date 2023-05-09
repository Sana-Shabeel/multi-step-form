import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import arcadeSvg from "../../assets/images/icon-arcade.svg";
import advancedSvg from "../../assets/images/icon-advanced.svg";
import proSvg from "../../assets/images/icon-pro.svg";

const plans = [
  {
    name: "Arcade",
    price: {
      monthly: "$9/mo",
      yearly: "$90/yr",
    },
    icon: arcadeSvg,
  },
  {
    name: "Advanced",
    price: {
      monthly: "$12/mo",
      yearly: "$120/yr",
    },
    icon: advancedSvg,
  },
  {
    name: "Pro",
    price: {
      monthly: "$15/mo",
      yearly: "$150/yr",
    },
    icon: proSvg,
  },
];

interface Props {
  enabled: boolean;
}

export default function TogglePlan({ enabled }: Props) {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className="w-full">
      <div>
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-3 xl:flex xl:h-48 xl:space-y-0 xl:gap-4">
            {plans.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${active ? " border-pasteBlue" : ""}
                  ${checked ? "bg-magnolia border-pasteBlue" : ""}
                  ${enabled ? "" : "items-center"}
                    relative flex cursor-pointer rounded-lg focus:outline-none border-2 p-4 w-full gap-4 xl:flex-col xl:items-start xl:h-full xl:gap-12`
                }
              >
                <>
                  <div>
                    <img src={plan.icon} alt={`icon ${plan.name}`} />
                  </div>
                  <div>
                    <div className="text-sm">
                      <RadioGroup.Label
                        as="p"
                        className={`font-bold text-xl text-marineBlue`}
                      >
                        {plan.name}
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="span"
                        className={`text-coolGray`}
                      >
                        <p className="my-1">
                          {enabled ? plan.price.yearly : plan.price.monthly}
                        </p>
                        <p
                          className={`${
                            enabled ? "" : "hidden"
                          } text-marineBlue`}
                        >
                          2 month free
                        </p>
                      </RadioGroup.Description>
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
