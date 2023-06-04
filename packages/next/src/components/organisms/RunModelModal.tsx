import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { z } from "zod";
import { FormSelect } from "@/components/molecules/formInputs/FormSelect";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRunModel } from "@/hooks/useRunModel";
import {type FC} from "react";

const RunModelFormSchema = z.object({
  triggerId: z.string(),
});

type RunModelForm = z.infer<typeof RunModelFormSchema>;


type RunModelModalProps = {
  modelId: string
}
export const RunModelModal: FC<RunModelModalProps> = ({ modelId}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const form = useForm<RunModelForm>({
    resolver: zodResolver(RunModelFormSchema),
  });

  const { runModel, isLoading } = useRunModel();

  const onSubmit = async ({ triggerId }: RunModelForm) => {
    await runModel(modelId, triggerId)
    onClose();
  };

  return (
    <FormProvider {...form}>
      <Button variant="primary" onClick={onOpen}>
        Run on Contact
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Run Model</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4}>
            <FormSelect
              name="triggerId"
              options={[
                {
                  label: "Lucky Puppy-1100829332",
                  value: "Lucky Puppy-1100829332",
                },
                { label: "Brillist-1328724601", value: "Brillist-1328724601" },
              ]}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              variant="primary"
              onClick={form.handleSubmit(onSubmit)}
              isLoading={isLoading}
            >
              Run
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </FormProvider>
  );
};
