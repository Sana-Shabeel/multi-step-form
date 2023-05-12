import { createContext, useCallback, useState } from "react";

interface FormData {
  [key: string]: string | number | boolean | undefined | object;
}

interface FormDataContextProps {
  formData: FormData;
  updateFormData: (
    key: string,
    value: string | number | boolean | undefined | object
  ) => void;
}

export const FormDataContext = createContext<FormDataContextProps>({
  formData: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateFormData: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
});

interface FormDataProviderProps {
  children: React.ReactNode;
}

export const FormDataProvider = ({ children }: FormDataProviderProps) => {
  const [formData, setFormData] = useState<FormData>({});

  //This ensures that the function is only created once and memoized as long as the setFormData function does not change.
  const updateFormData = useCallback(
    (key: string, value: string | number | boolean | undefined | object) => {
      setFormData((prevData) => ({ ...prevData, [key]: value }));
    },
    [setFormData]
  );

  console.log(formData);

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
