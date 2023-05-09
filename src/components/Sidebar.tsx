import React from "react";

const Sidebar = () => {
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
        {steps.map((step) => (
          <div className="mb-6 flex items-center gap-4" key={step.id}>
            <div
              className="w-8 h-8 rounded-full bg-transparent grid place-content-center border text-white "
              key={step.id}
            >
              {step.id}
            </div>
            <div>
              <p className="text-sm text-coolGray">
                {step.title.toUpperCase()}
              </p>
              <h3 className="text-md text-white mb-1">{step.description}</h3>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
