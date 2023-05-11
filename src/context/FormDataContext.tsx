import { createContext, useCallback, useState } from "react";

interface FormData {
  [key: string]: string | number | boolean | undefined;
}

interface FormDataContextProps {
  formData: FormData;
  updateFormData: (
    key: string,
    value: string | number | boolean | undefined
  ) => void;
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  enabled: boolean;
}

export const FormDataContext = createContext<FormDataContextProps>({
  formData: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateFormData: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setEnabled: () => {},
  enabled: false,
});

interface FormDataProviderProps {
  children: React.ReactNode;
}

export const FormDataProvider = ({ children }: FormDataProviderProps) => {
  const [formData, setFormData] = useState<FormData>({});
  const [enabled, setEnabled] = useState(false);

  //This ensures that the function is only created once and memoized as long as the setFormData function does not change.
  const updateFormData = useCallback(
    (key: string, value: string | number | boolean | undefined) => {
      setFormData((prevData) => ({ ...prevData, [key]: value }));
    },
    [setFormData]
  );

  console.log(formData);

  return (
    <FormDataContext.Provider
      value={{ formData, updateFormData, setEnabled, enabled }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
