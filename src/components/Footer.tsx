const Footer = () => {
  return (
    <div className="h-[72px] bg-white flex justify-between items-center absolute bottom-0 w-full px-4 xl:relative xl:px-0">
      <button className="bg-transparent text-coolGray px-4 py-2 border-none hover:text-marineBlue">
        Go Back
      </button>
      <button className="bg-marineBlue px-4 py-2 text-white rounded-md hover:bg-[#174987]">
        Next Step
      </button>
    </div>
  );
};

export default Footer;
