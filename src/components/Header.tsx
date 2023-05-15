interface HeaderProps {
  step: number;
}

const Header = ({ step }: HeaderProps) => {
  console.log("step", step + 1);

  return (
    <header className="bg-sidebar-mobile bg-cover bg-center xl:hidden w-full h-[172px] flex justify-center gap-4 pt-6 md:gap-10">
      {[1, 2, 3, 4].map((num) => (
        <div
          className={`${
            step + 1 === num
              ? "bg-lightGray text-black"
              : "bg-transparent text-white"
          } w-9 h-9 rounded-full  grid place-content-center border  `}
          key={num}
        >
          {num}
        </div>
      ))}
    </header>
  );
};

export default Header;
