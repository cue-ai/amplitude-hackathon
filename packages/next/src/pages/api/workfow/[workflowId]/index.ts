import {NextApiHandler} from "next";
import {prisma} from "@hackathon/db";
import {z} from "zod";

export const WorkflowIdQuerySchema = z.object({
  workflowId: z.string(),
})

const WorkflowIdHandler: NextApiHandler = (req, res) => {
  if (req.method !== "GET") return res.status(405).json({message: "Method not allowed"});

  const {workflowId} = WorkflowIdQuerySchema.parse(req.query);

  return prisma.workflow.findFirst({
    where: {
      id: workflowId,
    }
  })
}

export default WorkflowIdHandler;
