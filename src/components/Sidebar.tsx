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
  return <div className="bg-sidebar-mobile xl:bg-sidebar-desktop"></div>;
};

export default Sidebar;
