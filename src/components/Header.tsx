const Header = () => {
  return (
    <header className="bg-sidebar-mobile bg-cover bg-center xl:hidden w-full h-[172px] flex justify-center gap-4 pt-6 md:gap-10">
      {[1, 2, 3, 4].map((num) => (
        <div
          className="w-9 h-9 rounded-full bg-transparent grid place-content-center border text-white "
          key={num}
        >
          {num}
        </div>
      ))}
    </header>
  );
};

export default Header;
