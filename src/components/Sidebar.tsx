interface SidebarProps {
  step: number;
}

const Sidebar = ({ step }: SidebarProps) => {
  const steps = [
    {
      id: 1,
      title: "Step 1",
      description: "YOUR INFO",
    },
    {
      id: 2,
      title: "Step 2",
      description: "SELECT PLAN",
    },
    {
      id: 3,
      title: "Step 3",
      description: "ADD-ONS",
    },
    {
      id: 4,
      title: "Step 4",
      description: "SUMMARY",
    },
  ];

  return (
    <aside className="hidden w-[274px] xl:block bg-white h-[568px] bg-sidebar-desktop bg-cover bg-center">
      <div className="px-8 py-8">
        {steps.map(({ id, title, description }) => (
          <div className="mb-6 flex items-center gap-4" key={id}>
            <div
              className={`${
                step === id - 1 ? "bg-lightGray text-black" : ""
              } w-9 h-9 rounded-full bg-transparent grid place-content-center border text-white `}
              key={id}
            >
              {id}
            </div>
            <div>
              <p className="text-sm text-coolGray">{title.toUpperCase()}</p>
              <h3 className="text-md text-white mb-1">{description}</h3>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
