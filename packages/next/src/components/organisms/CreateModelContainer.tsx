import { type FC } from "react";
import { Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FormInput } from "@/components/molecules/formInputs/FormInput";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateModel } from "@/hooks/useCreateModel";
import { useToastSuccessError } from "@/hooks/useToastSuccessError";
import { useRouter } from "next/router";

export const CreateFormSchema = z.object({
  name: z.string().nonempty(),
  goal: z.string(),
});

type CreateForm = z.infer<typeof CreateFormSchema>;

type CreateWorkflowContainerProps = {
  back: () => void;
};

export const CreateModelContainer: FC<CreateWorkflowContainerProps> = ({
  back,
}) => {
  const router = useRouter();
  const form = useForm<CreateForm>({
    resolver: zodResolver(CreateFormSchema),
  });

  const { data, error, createModel, isLoading } = useCreateModel();

  useToastSuccessError({
    data,
    error,
    onSuccess: () => router.push(`/model/${data?.model?.id}`),
  });

  const handleSubmit = (data: CreateForm) => {
    void createModel(data);
  };

  return (
    <FormProvider {...form}>
      <Text color="subtle">Create New Model</Text>
      <Flex
        direction="column"
        h="full"
        w="full"
        maxW="400px"
        justify="center"
        align="center"
      >
        <VStack
          spacing={4}
          as="form"
          onSubmit={form.handleSubmit(handleSubmit)}
          alignItems="center"
          w="full"
          direction="column"
        >
          <FormInput
            label="Model Name"
            name="name"
            placeholder="Enter a model name"
          />
          <FormInput
            label="I want to create a model that..."
            name="goal"
            placeholder="i.e. Detect churn"
          />
          <HStack spacing={3} w="full">
            <Button size="sm" w="full" isDisabled>
              <Image
                mr={2}
                w={6}
                h={6}
                src="https://companieslogo.com/img/orig/AMPL-501a52ff.png?t=1644176877"
              />
              Amplitude Connected
            </Button>
            <Button size="sm" w="full" isDisabled>
              <Image mr={2} w={6} h={6} src="https://i.imgur.com/uJoXf2P.png" />
              Salesforce Connected
            </Button>
          </HStack>
          <HStack spacing={3}>
            <Button size="lg" onClick={back}>
              Back
            </Button>
            <Button
              size="lg"
              variant="primary"
              type="submit"
              isLoading={isLoading}
            >
              Train
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </FormProvider>
  );
};
