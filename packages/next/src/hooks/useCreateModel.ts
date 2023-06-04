import { useState } from "react";
import { type Model } from "@hackathon/db";
import { type CreateWorkflowBody } from "@/pages/api/model";
import axios from "axios";

export const useCreateModel = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setModel] = useState<{ model: Model } | null>(null);

  const createModel = async (model: CreateWorkflowBody) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post("/api/model", model);

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
    createModel,
  };
};
