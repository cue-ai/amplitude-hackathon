import { type NextApiHandler } from "next";
import { ModelIdQuerySchema } from "@/pages/api/model/[modelId]/index";
import { z } from "zod";
import axios from "axios";
import { env } from "@/env.mjs";

export const RunWorkflowBodySchema = z.object({
  triggerId: z.string(),
});

const RunWorkflow: NextApiHandler = async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { modelId } = ModelIdQuerySchema.parse(req.query);

  const body = RunWorkflowBodySchema.parse(req.body);

  const { data } = await axios.post(
    `${env.BACKEND_URL}/model/${modelId}/run`,
    body
  );

  return res.status(200).json({ modelRun: data });
};

export default RunWorkflow;
