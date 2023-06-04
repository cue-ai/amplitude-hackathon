import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";

export const useToastSuccessError = <T = any>({
  data,
  error,
  onSuccess,
}: {
  data: T;
  error: any;
  onSuccess?: () => void;
}) => {
  const toast = useToast();
  useEffect(() => {
    if (data) {
      toast({
        title: "Success",
        status: "success",
        isClosable: true,
      });
      onSuccess?.();
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error.toString(),
        status: "error",
        isClosable: true,
      });
    }
  }, [error]);
};
