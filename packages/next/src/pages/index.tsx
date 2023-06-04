import { type NextPage } from "next";
import { ModelsContainer } from "@/components/organisms/ModelsContainer";
import { PageContainer } from "@/components/PageContainer";

const Home: NextPage = () => {
  return (
    <PageContainer>
      <ModelsContainer />
    </PageContainer>
  );
};

export default Home;
