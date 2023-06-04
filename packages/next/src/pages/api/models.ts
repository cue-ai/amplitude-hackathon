import { type NextApiHandler } from "next";
import { prisma } from "@hackathon/db";

const ModelsHandler: NextApiHandler = async (req, res) => {
  const models = await prisma.model.findMany({});

  return res.status(200).json({ models });
};

export default ModelsHandler
