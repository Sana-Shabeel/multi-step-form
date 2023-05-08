import { Switch } from "@headlessui/react";

interface Props {
  enabled: boolean;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToggleSwitch({ enabled, setEnabled }: Props) {
  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`bg-marineBlue relative inline-flex h-5 w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 items-center `}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-5" : "translate-x-1"}
            pointer-events-none inline-block h-3 w-3 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
