import { useContext, useEffect } from "react";
import checkmark from "../../assets/images/icon-checkmark.svg";
import { AddOn } from "./AddOns";
import { FormDataContext } from "../../context/FormDataContext";
// import advancedSvg from "../../assets/images/icon-advanced.svg";

interface Props {
  addOn: AddOn;
  enabled: boolean;
  // checked: boolean;
  handleChange: (id: number) => void;
}

const CheckboxAddOns = ({ addOn, enabled, handleChange }: Props) => {
  const { updateFormData } = useContext(FormDataContext);

  useEffect(() => {
    const value = enabled ? addOn.price.yearly : addOn.price.monthly;
    const title = addOn.title.split(" ")[0];

    if (addOn.checked) {
      updateFormData(title, {
        title: addOn.title,
        price: value,
        status: addOn.checked,
      });
    } else {
      updateFormData(title, undefined);
    }
    console.log("useEffect");
  }, [addOn, enabled, updateFormData]);

  return (
    <div
      className={`${
        addOn.checked ? "border-publishBlue bg-alabaster" : "border-magnolia"
      }
       flex justify-between items-center  py-5 px-4 rounded-lg  border-2  cursor-pointer xl:justify-start xl:gap-12 xl:relative hover:border-publishBlue`}
      onClick={() => handleChange(addOn.id)}
    >
      <div
        className={`grid h-6 w-6  place-items-center rounded ${
          addOn.checked
            ? "bg-violet"
            : "cursor-pointer border-2 border-lightGray dark:bg-darkGray"
        }`}
      >
        {addOn.checked && (
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
