import Headline from "./Headline";

const FinishingUp = () => {
  return (
    <div className="w-[343px] md:w-[450px] -mt-20 mx-auto bg-white py-6 px-4 rounded-md grid grid-cols-1 gap-6">
      <Headline
        title="Finishing up"
        description="Double-check everything looks OK before confirming."
      />

      <div className="bg-alabaster p-4 rounded-md">
        <div className="flex justify-between items-center border-b pb-4">
          <div>
            <h3 className="text-md text-marineBlue font-bold">
              Arcade (Yearly)
            </h3>
            <button className="text-ms text-coolGray underline">Change</button>
          </div>
          <p className="font-bold">$90/yr</p>
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="text-coolGray">Online services</p>
          <p>+$10/yr</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <p className="text-coolGray">Large storage</p>
          <p>+$12/yr</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 px-4">
        <p className="text-coolGray text-lg">Total (per year)</p>
        <p className="text-publishBlue font-bold text-xl">+$120/yr</p>
      </div>
    </div>
  );
};

export default FinishingUp;
