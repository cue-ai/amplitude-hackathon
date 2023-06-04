import { type NextApiHandler } from "next";
import { prisma } from "@hackathon/db";
import { z } from "zod";

export const ModelIdQuerySchema = z.object({
  modelId: z.string(),
});

const WorkflowIdHandler: NextApiHandler = async (req, res) => {
  if (req.method !== "GET")
    return res.status(405).json({ message: "Method not allowed" });

  console.log(req.query);
  const { modelId } = ModelIdQuerySchema.parse(req.query);
  console.log(modelId);
  if (!modelId) return res.status(404).end();

  const model = await prisma.model.findFirst({
    where: {
      id: modelId,
    },
  });

  return res.status(200).json({ model });
};

export default WorkflowIdHandler;
