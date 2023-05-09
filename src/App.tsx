import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import Sidebar from "./components/Sidebar";
import AddOns from "./components/Add-ons/AddOns";

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <main className="h-screen bg-magnolia xl:grid place-items-center">
      <div className="xl:hidden">
        <Header />
        <AddOns enabled={enabled} />
        <Footer />
      </div>

      {/* at 1440px */}
      <div className="hidden w-[940px] mx-auto p-4 rounded-md h-[600px] bg-white xl:flex gap-20">
        <Sidebar />
        <div>
          <AddOns enabled={enabled} />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
