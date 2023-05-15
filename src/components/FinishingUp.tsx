import { useContext } from "react";
import { FormDataContext } from "../context/FormDataContext";
import Headline from "./Headline";

interface Props {
  yearly: boolean;
}

const FinishingUp = ({ yearly }: Props) => {
  const { formData } = useContext(FormDataContext);

  const { plan } = formData;
  const { Online, Customizable, Larger } = formData;

  const addOns = [Online, Customizable, Larger].filter(
    (addon) => addon !== undefined
  );

  const planName = plan?.split("-")[0];
  const planPrice = plan?.split("-")[1];

  const getTotalPrice = () => {
    let totalPrice = 0;
    if (planPrice) {
      const numFromStr = plan.replace(/[^0-9]/g, "");
      console.log(numFromStr);

      totalPrice += parseFloat(numFromStr);
    }
    addOns.forEach((addOn) => {
      if (addOn && addOn?.price) {
        totalPrice += addOn?.price;
      }
    });
    return totalPrice;
  };

  const formatPrice = (price: number) => {
    const formattedPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
    return formattedPrice;
  };

  console.log(getTotalPrice());

  return (
    <div className="w-[343px] sm:w-[70%] lg:w-[50%] -mt-20 mx-auto bg-white py-6 px-4 rounded-md grid grid-cols-1 gap-6 xl:mx-0 xl:m-12 xl:w-[450px] xl:p-0 xl:h-96">
      <Headline
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />

      <div className="bg-alabaster p-4 rounded-md">
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h3 className="text-md text-marineBlue font-bold">
              {yearly ? `${planName} (Yearly)` : `${planName} (Monthly) `}
            </h3>
            <button className="text-ms text-coolGray underline hover:text-publishBlue">
              Change
            </button>
          </div>
          <p className="font-bold">{planPrice}</p>
        </div>
        {addOns.map((addOn, idx) => (
          <div className="flex justify-between items-center mt-2" key={idx}>
            <p className="text-coolGray">{addOn?.title}</p>
            <p>{yearly ? `+${addOn?.price}/yr` : `+${addOn?.price}/mo`}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-2 px-4">
        <p className="text-coolGray text-lg">
          {" "}
          Total (per {yearly ? "year" : "month"})
        </p>
        <p className="text-publishBlue font-bold text-xl">
          {" "}
          {formatPrice(getTotalPrice())}/{yearly ? "yr" : "mo"}
        </p>
      </div>
    </div>
  );
};

export default FinishingUp;
