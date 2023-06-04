import { type NextPage } from "next";
import { PageContainer } from "@/components/PageContainer";
import { ModelsCard } from "@/components/organisms/ModelsCard";
import { CreateModelContainer } from "@/components/organisms/CreateModelContainer";
import { useState } from "react";

type Page = "Home" | "CreateNewWorkflow";
const Home: NextPage = () => {
  const [state, setState] = useState<Page>("Home");

  return (
    <PageContainer>
      {state === "Home" ? (
        <ModelsCard onCreateNewWorkflow={() => setState("CreateNewWorkflow")} />
      ) : (
        <CreateModelContainer back={() => setState("Home")} />
      )}
    </PageContainer>
  );
};

export default Home;
