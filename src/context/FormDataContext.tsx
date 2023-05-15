import { createContext, useCallback, useState } from "react";
import { z } from "zod";

const addOns = z.object({
  title: z.string(),
  price: z.number(),
  status: z.boolean(),
});

const formDataSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(6),
  plan: z.string(),
  Online: addOns.optional(),
  Larger: addOns.optional(),
  Customizable: addOns.optional(),
});

type FormData = z.infer<typeof formDataSchema>;

const INITIAL_FORM_DATA: FormData = {
  name: "",
  email: "",
  phone: "",
  plan: "",
};

interface FormDataContextProps {
  formData: FormData;
  validationErrors: { [key: string]: string };
  updateFormData: (
    key: string,
    value: string | number | boolean | undefined | object
  ) => void;
  validateFormData: () => boolean;
}

export const FormDataContext = createContext<FormDataContextProps>({
  formData: INITIAL_FORM_DATA,
  validationErrors: {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  updateFormData: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  validateFormData: () => false,
});

interface FormDataProviderProps {
  children: React.ReactNode;
}

export const FormDataProvider = ({ children }: FormDataProviderProps) => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  //This ensures that the function is only created once and memoized as long as the setFormData function does not change.
  const updateFormData = useCallback(
    (key: string, value: string | number | boolean | undefined | object) => {
      setFormData((prevData) => {
        const newData = { ...prevData, [key]: value };
        return newData;
      });
    },
    [setFormData]
  );

  const validateFormData = (): boolean => {
    try {
      formDataSchema.parse(formData); // validate the new form data
      setValidationErrors({});
      console.log("validateFormData", "Form is valid");
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: { [key: string]: string } = {};
        error.errors.forEach((err) => {
          if (err.path) {
            const field = err.path[0];
            const message = err.message;
            errors[field] = message;
          }
        });
        setValidationErrors(errors);
        console.log("validationErrors", errors);
        return false;
      } else {
        console.log("Unknown error!", error);
        throw error;
      }
    }
  };

  return (
    <FormDataContext.Provider
      value={{ formData, updateFormData, validateFormData, validationErrors }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
