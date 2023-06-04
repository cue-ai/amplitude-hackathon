import { type FC } from "react";
import { useSwr } from "@/hooks/useSwr";
import { type Model } from "@hackathon/db";
import { type ModelRun } from "@hackathon/db";
import {
  Button,
  Flex,
  Icon,
  IconButton,
  Spacer,
  Tag,
  Text,
} from "@chakra-ui/react";
import { FiChevronLeft } from "react-icons/fi";
import { RunModelModal } from "@/components/organisms/RunModelModal";

type ModelCardProps = {
  modelId: string;
};

export const ModelCard: FC<ModelCardProps> = ({ modelId }) => {
  const { data } = useSwr<{ model: Model }>(`/api/model/${modelId}`);
  const { data: runsData } = useSwr<{ modelRuns: ModelRun[] }>(
    `/api/model/${modelId}/runs`
  );

  return (
    <>
      <Flex align="center" w="full">
        <IconButton
          variant="ghost"
          aria-label="back"
          icon={<Icon as={FiChevronLeft} boxSize={8} />}
        />
        <Text fontSize="lg">{data?.model?.name}</Text>
        <Tag ml={4} colorScheme="green">
          {Math.round((data?.model?.accuracy ?? 0) * 100)}% Accuracy
        </Tag>
        <Spacer />
        <RunModelModal modelId={modelId} />
      </Flex>
      <Flex w="full" my={3}>
        <Text fontSize="sm" color="subtle">
          Model Runs
        </Text>
      </Flex>
      {runsData?.modelRuns?.map(({ triggeredBy, id, output }) => (
        <Flex align="center" my={2} key={id} w="full" bg="whiteAlpha.50"
         p={3}
              border="whiteAlpha.100"
              borderWidth={1}
              borderRadius="md"
        >
          <Text fontSize="sm" color="subtle">
            {triggeredBy}
          </Text>
          <Spacer />
          {output ? (
            <Tag colorScheme="green">True</Tag>
          ) : (
            <Tag colorScheme="red">False</Tag>
          )}
        </Flex>
      ))}
    </>
  );
};
