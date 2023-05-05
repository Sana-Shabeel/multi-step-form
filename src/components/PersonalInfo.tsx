import Headline from "./Headline";

const PersonalInfo = () => {
  return (
    <div className="w-[343px] -mt-20 mx-auto bg-white py-6 px-4 rounded-md grid grid-cols-1 gap-6">
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
          className="border-gray-300 block w-full rounded-md border py-2 pl-3 shadow-sm outline-none focus:border-b-4 focus:border-marineBlue sm:text-sm "
        />
      </div>
      <div>
        <label htmlFor="name" className="text-gray-700 block text-sm mb-1">
          Email Address
        </label>
        <input
          type="text"
          placeholder="e.g. johndoe@lorem.com"
          id="name"
          className="border-gray-300 block w-full rounded-md border py-2 pl-3 shadow-sm outline-none focus:border-b-4 focus:border-marineBlue sm:text-sm "
        />
      </div>
      <div className="mb-4">
        <label htmlFor="name" className="text-gray-700 block text-sm mb-1">
          Phone Number
        </label>
        <input
          type="text"
          placeholder="e.g. +1 234 567 890"
          id="name"
          className="border-gray-300 block w-full rounded-md border py-2 pl-3 shadow-sm outline-none focus:border-b-4 focus:border-marineBlue sm:text-sm "
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
