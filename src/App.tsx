import SelectPlan from "./components/SelectPlan";

function App() {
  return (
    <main className="h-screen bg-magnolia">
      <header className="bg-sidebar-mobile w-full h-[172px] flex justify-center gap-4 pt-6">
        {[1, 2, 3, 4].map((num) => (
          <div
            className="w-9 h-9 rounded-full bg-transparent grid place-content-center border text-white"
            key={num}
          >
            {num}
          </div>
        ))}
      </header>

      <SelectPlan />
    </main>
  );
}

export default App;
