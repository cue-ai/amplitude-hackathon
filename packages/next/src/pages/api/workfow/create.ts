import { type NextApiHandler } from "next";
import { z } from "zod";
import { prisma } from "@hackathon/db";
import { env } from "@/env.mjs";
import axios from "axios";

export const CreateWorkflowBodySchema = z.object({
  name: z.string(),
  goal: z.string(),
  relevantEvents: z.string().array(),
});

const CreateWorkflowHandler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });

  const body = CreateWorkflowBodySchema.parse(req.body);

  const workflow = await prisma.workflow.create({
    data: {
      ...body,
      status: "FetchingData",
    },
  });

  await axios.post(`${env.BACKEND_URL}/workflow/${workflow.id}`);

  return res.status(200).json({ workflow });
};

export default CreateWorkflowHandler;
