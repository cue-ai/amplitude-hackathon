import { Card } from "@/components/atoms/Card";
import { ModelsCard } from "@/components/organisms/ModelsCard";
import { useState } from "react";
import { CreateModelContainer } from "@/components/organisms/CreateModelContainer";

type Page = "Home" | "CreateNewWorkflow";

export const ModelsContainer = () => {
  const [state, setState] = useState<Page>("Home");

  return (
    <Card>
      {state === "Home" ? (
        <ModelsCard onCreateNewWorkflow={() => setState("CreateNewWorkflow")} />
      ) : (
        <CreateModelContainer back={() => setState("Home")} />
      )}
    </Card>
  );
};
