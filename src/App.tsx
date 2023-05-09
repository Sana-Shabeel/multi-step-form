import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SelectPlan from "./components/SelectPlan/SelectPlan";
import Sidebar from "./components/Sidebar";

function App() {
  const [enabled, setEnabled] = useState(false);

  return (
    <main className="h-screen bg-magnolia xl:grid place-items-center">
      <div className="xl:hidden">
        <Header />
        <SelectPlan enabled={enabled} setEnabled={setEnabled} />
        <Footer />
      </div>

      {/* at 1440px */}
      <div className="hidden w-[940px] mx-auto p-4 rounded-md h-[600px] bg-white xl:flex gap-20">
        <Sidebar />
        <div>
          <SelectPlan enabled={enabled} setEnabled={setEnabled} />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;
