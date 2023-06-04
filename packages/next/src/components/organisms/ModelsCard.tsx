import {Button, Flex, HStack, Spacer, Text} from "@chakra-ui/react";
import { type FC } from "react";
import {useSwr} from "@/hooks/useSwr";
import {type Model} from "@hackathon/db";
import {useRouter} from "next/router";

export type WorkflowsCardProps = {
  onCreateNewWorkflow: () => void;
};

export const ModelsCard: FC<WorkflowsCardProps> = ({ onCreateNewWorkflow }) => {
  const router = useRouter();
  const {data: models} = useSwr<{ models: Model[]}>('/api/models');
  return (
    <>
      <Flex alignItems="center" w="full">
        <Text color="subtle" fontSize="lg">
          Previously Trained Models
        </Text>
        <Spacer/>
        <Button variant="primary" onClick={onCreateNewWorkflow}>
          Create New Model
        </Button>
      </Flex>
      <HStack w="full" mt={4}>
        {
          models?.models?.map(({ name, goal, id}) => (
          <Flex
            cursor="pointer"
            onClick={() => router.push(`/model/${id}`)} key={id}  w="full" bgColor="whiteAlpha.50"
            p={3}
                borderRadius="md"
          >
            <Text fontSize="lg" fontWeight="bold">{name}</Text>
            <Text ml={8} color="subtle">Goal: {goal}</Text>
          </Flex>
          ))
        }
      </HStack>
    </>
  );
};
