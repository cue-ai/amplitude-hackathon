import React, { type ReactNode } from "react";
import {
  type BoxProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  type FormLabelProps,
  Input,
  InputGroup,
  type InputProps,
  InputRightAddon,
  InputRightElement,
} from "@chakra-ui/react";
import { Controller, type ControllerProps } from "react-hook-form";

export type FormInputProps = {
  label?: string;
  containerProps?: BoxProps;
  retainErrorSpace?: boolean;
  labelProps?: FormLabelProps;
  rightElement?: ReactNode;
  rightAddon?: ReactNode;
  name: string;
  controllerProps?: ControllerProps;
} & InputProps;

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      name,
      label,
      containerProps,
      labelProps,
      rightElement,
      retainErrorSpace,
      rightAddon,
      ...props
    },
    ref
  ) => (
    <Controller
      name={name}
      render={({ field, fieldState }) => (
        <FormControl isInvalid={Boolean(fieldState.error)} {...containerProps}>
          {label && (
            <FormLabel htmlFor={label} {...labelProps}>
              {label}
            </FormLabel>
          )}
          <InputGroup w="full">
            <Input
              id={label}
              mb={retainErrorSpace && !fieldState.error ? 6 : 0}
              w="full"
              {...props}
              {...field}
              ref={ref}
            />
            {rightElement && (
              <InputRightElement w="min-content">
                {rightElement}
              </InputRightElement>
            )}
            {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
          </InputGroup>
          {fieldState.error && (
            <FormErrorMessage>{fieldState.error.message}</FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  )
);

FormInput.displayName = "TextField";
