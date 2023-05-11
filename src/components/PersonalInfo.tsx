import { useContext } from "react";
import { FormDataContext } from "../context/FormDataContext";
import Headline from "./Headline";

const PersonalInfo = () => {
  const { updateFormData } = useContext(FormDataContext);

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData(e.target.name, e.target.value);
  };
  return (
    <div className="w-[343px] sm:w-[70%] lg:w-[50%] -mt-20 mx-auto bg-white py-6 px-4 rounded-md grid grid-cols-1 gap-6 xl:mx-0 xl:m-12 xl:w-[450px] xl:p-0 xl:h-96">
      <Headline
        title="Personal Info"
        description="Please provide your name, email address, and phone number."
      />
      <div>
        <label htmlFor="name" className="text-gray-700 block text-sm mb-1">
          Name
        </label>
        <input
          type="text"
          placeholder="e.g. John Doe"
          id="name"
          name="name"
          onChange={handleChanges}
          className="border-gray-300 block w-full rounded-md border py-2 pl-3 shadow-sm outline-none focus:border-b-4 focus:border-marineBlue sm:text-sm xl:py-4"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-gray-700 block text-sm mb-1">
          Email Address
        </label>
        <input
          type="text"
          placeholder="e.g. johndoe@lorem.com"
          id="email"
          name="email"
          onChange={handleChanges}
          className="border-gray-300 block w-full rounded-md border py-2 pl-3 shadow-sm outline-none focus:border-b-4 focus:border-marineBlue sm:text-sm xl:py-4"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="number" className="text-gray-700 block text-sm mb-1">
          Phone Number
        </label>
        <input
          type="number"
          placeholder="e.g. +1 234 567 890"
          id="number"
          name="number"
          onChange={handleChanges}
          className="border-gray-300 block w-full rounded-md border py-2 pl-3 shadow-sm outline-none focus:border-b-4 focus:border-marineBlue sm:text-sm xl:py-4"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
