import { useState } from "react";
import { type ModelRun } from "@hackathon/db";
import axios from "axios";

export const useRunModel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setModel] = useState<{ modelRun: ModelRun } | null>(null);

  const runModel = async (modelId: string, triggerId: string) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(`/api/model/${modelId}/run`,{ triggerId });

      setModel(data);
    } catch (e: any) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    data,
    runModel,
  };
};
