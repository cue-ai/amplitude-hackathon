import React, { type FC } from "react";
import {
  Box,
  type BoxProps,
  FormControl,
  type FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";
import { type OptionsOrGroups, type Props, Select } from "chakra-react-select";

import { type ChakraStylesConfig } from "chakra-react-select";

export const reactSelectStyles: ChakraStylesConfig = {
  dropdownIndicator: (provided) => ({
    ...provided,
    background: "transparent",
    p: 0,
    color: "gray.600",
    w: "40px",
  }),
  downChevron: (provided) => ({
    ...provided,
    w: "16px",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  menu: (provided) => ({
    ...provided,
    background: "gray.800",
  }),
  menuList: (provided) => ({
    ...provided,
    background: "gray.800",
  }),
  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    color: "white",
    background: isSelected || isFocused ? "gray.700" : "gray.800",
    py: 7,
  }),
};

export type FormSelectProps = {
  label?: string;
  helperText?: string;
  selectProps?: Omit<
    BoxProps & Props<any>,
    "ref" | "name" | "onChange" | "onBlur" | "value" | "isMulti"
  >;
  name: string;
  options?: OptionsOrGroups<any, any>;
  isMulti?: boolean;
  placeholder?: string;
  isLoading?: boolean;
} & Partial<FormControlProps>;

export const FormSelect: FC<FormSelectProps> = ({
  label,
  helperText,
  name,
  selectProps,
  options,
  isMulti,
  placeholder,
  w,
  isLoading,
  ...props
}) => (
  <Controller
    name={name}
    render={({
      field: { onChange, onBlur, value, name, ref },
      fieldState: { error },
    }) => {
      const option = isMulti
        ? options?.filter((o) => value?.includes(o.value))
        : options?.find((o) => o.value === value);
      return (
        <FormControl
          isInvalid={Boolean(error)}
          w="min-width"
          isDisabled={isLoading}
          {...props}
        >
          {label && <FormLabel>{label}</FormLabel>}
          <Box
            as={Select}
            w={w ?? "full"}
            defaultValue={option}
            chakraStyles={reactSelectStyles}
            options={options}
            ref={ref}
            name={name}
            onChange={(o: any) => {
              onChange(
                isMulti
                  ? o?.map((o: { label: string; value: string }) => o?.value)
                  : o?.value
              );
            }}
            onBlur={onBlur}
            value={option}
            isMulti={isMulti}
            placeholder={isLoading ? "Loading..." : placeholder}
            {...selectProps}
          />
          {Boolean(helperText) && (
            <FormHelperText textAlign="left">{helperText}</FormHelperText>
          )}
          {Boolean(error) && (
            <FormErrorMessage>{error?.message}</FormErrorMessage>
          )}
        </FormControl>
      );
    }}
  />
);
