import { FormEventHandler, ReactNode } from "react";
import {
  FieldValues,
  FormProvider,
  FormProviderProps,
  SubmitErrorHandler,
  SubmitHandler,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  onReset?: () => void;
  children: ReactNode;
  formOptions: Omit<FormProviderProps<T>, "children">;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  onValid?: SubmitHandler<T>;
  onInvalid?: SubmitErrorHandler<T>;
};

const RHFForm = <T extends FieldValues>(props: Props<T>) => {
  const { onReset, onSubmit, children, formOptions, onValid, onInvalid } =
    props;

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (onValid) formOptions.handleSubmit(onValid, onInvalid)(e);
    if (onSubmit) onSubmit(e);
  };

  return (
    <FormProvider {...formOptions}>
      <form onSubmit={handleFormSubmit} onReset={onReset}>
        {children}
      </form>
    </FormProvider>
  );
};

export default RHFForm;
