import { type NextApiHandler } from "next";
import { z } from "zod";
import { prisma } from "@hackathon/db";
import axios from "axios";
import { env } from "@/env.mjs";

export const CreateWorkflowBodySchema = z.object({
  name: z.string(),
  goal: z.string(),
});

export type CreateWorkflowBody = z.infer<typeof CreateWorkflowBodySchema>;

const CreateWorkflowHandler: NextApiHandler = async (req, res) => {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Method not allowed" });
  console.log(req.body);

  const body = CreateWorkflowBodySchema.parse(req.body);

  const model = await prisma.model.create({
    data: {
      ...body,
      status: "FetchingData",
    },
  });

  void axios.post(`${env.BACKEND_URL}/model/${model.id}/train`);

  return res.status(200).json({ model });
};

export default CreateWorkflowHandler;
