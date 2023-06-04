import { type FC } from "react";
import { Skeleton, Text, VStack } from "@chakra-ui/react";
import { LoadingCardItem } from "@/components/organisms/LoadingCardItem";
import { type Model } from "@hackathon/db";
import { useSwr } from "@/hooks/useSwr";

type LoadingCardProps = {
  modelId: string;
};

export const LoadingCard: FC<LoadingCardProps> = ({ modelId }) => {
  const { data, isLoading } = useSwr<{ model: Model }>(
    modelId ? `/api/model/${modelId}` : undefined
  );
  return (
    <>
      <Text color="subtle">Model Loading...</Text>
      <VStack spacing={2} w="full" mt={12}>
        <Skeleton isLoaded={!isLoading} w="full">
          <LoadingCardItem
            title="Fetching Data..."
            complete={
              data?.model?.status === "ProcessingData" ||
              data?.model?.status === "Training"
            }
            current={data?.model?.status === "FetchingData"}
          />
        </Skeleton>

        <Skeleton isLoaded={!isLoading} w="full">
          <LoadingCardItem
            complete={data?.model?.status === "Training"}
            title="Processing Data..."
            current={data?.model?.status === "ProcessingData"}
          />
        </Skeleton>
        <Skeleton isLoaded={!isLoading} w="full">
          <LoadingCardItem title="Training..." />
        </Skeleton>
      </VStack>
    </>
  );
};
