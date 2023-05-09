import thankyou from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <div className="text-center w-[343px] sm:w-[70%] lg:w-[50%] -mt-20 mx-auto bg-white py-12 px-4 rounded-md grid grid-cols-1 gap-6 place-items-center xl:mx-0 xl:m-12 xl:w-[450px]">
      <img src={thankyou} alt="checkmark" />
      <h1 className="text-2xl font-bold mt-4">Thank you!</h1>
      <p className="text-coolGray ">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
