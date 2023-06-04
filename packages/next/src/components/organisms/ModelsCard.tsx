import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { type FC } from "react";

export type WorkflowsCardProps = {
  onCreateNewWorkflow: () => void;
};

export const ModelsCard: FC<WorkflowsCardProps> = ({ onCreateNewWorkflow }) => (
  <>
    <Flex alignItems="center" w="full">
      <Text color="subtle" fontSize="lg">
        Previously Trained Models
      </Text>
      <Spacer />
      <Button variant="primary" onClick={onCreateNewWorkflow}>
        Create New Model
      </Button>
    </Flex>
  </>
);
