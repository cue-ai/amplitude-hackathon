import { type NextApiHandler } from "next";
import { WorkflowIdQuerySchema } from "@/pages/api/workfow/[workflowId]/index";
import { z } from "zod";
import axios from "axios";
import { env } from "@/env.mjs";

export const RunWorkflowBodySchema = z.object({
  triggerId: z.string(),
});

const RunWorkflow: NextApiHandler = async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const { workflowId } = WorkflowIdQuerySchema.parse(req.query);

  const body = RunWorkflowBodySchema.parse(req.body);

  const { data } = await axios.post(
    `${env.BACKEND_URL}/workflow/${workflowId}/run`,
    body
  );

  return res.status(200).json({ workflowRun: data });
};

export default RunWorkflow;
