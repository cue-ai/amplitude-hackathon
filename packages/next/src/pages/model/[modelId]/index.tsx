import { type NextPage } from "next";
import { PageContainer } from "@/components/PageContainer";
import { LoadingCard } from "@/components/organisms/LoadingCard";
import { useRouter } from "next/router";
import { useSwr } from "@/hooks/useSwr";
import { type Model } from "@hackathon/db";

const ModelLoadingPage: NextPage = () => {
  const { modelId } = useRouter().query;
  const { data } = useSwr<{ model: Model }>(`/api/model/${modelId}`);
  return (
    <PageContainer>
      {data?.model?.status !== "Ready" && (
        <LoadingCard modelId={modelId as string} />
      )}
    </PageContainer>
  );
};

export default ModelLoadingPage;
