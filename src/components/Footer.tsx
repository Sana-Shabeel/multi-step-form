interface FooterProps {
  next: () => void;
  back: () => void;
  step: number;
  // handleSumbit: UseFormHandleSubmit<FieldValues>;
  // onSubmit: (data: object) => void;
}

const Footer = ({ next, back, step }: FooterProps) => {
  return (
    <div className="h-[72px] bg-white flex justify-between items-center absolute bottom-0 w-full px-4 xl:relative xl:px-0">
      <button
        type="button"
        className={`${
          step === 0 || step === 4 ? "invisible" : ""
        } bg-transparent text-coolGray px-4 py-2 border-none hover:text-marineBlue `}
        onClick={back}
      >
        Go Back
      </button>
      <button
        type="submit"
        className={`${step === 4 ? "hidden" : ""}         
          ${step === 3 ? "bg-publishBlue hover:bg-pasteBlue" : ""}  
          bg-marineBlue px-4 py-2 text-white rounded-md hover:bg-[#174987]`}
        onClick={next}
      >
        {step === 3 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default Footer;
