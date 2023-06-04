import {type NextApiHandler} from "next";
import {prisma} from "@hackathon/db";

 const ModelRunsHandler: NextApiHandler = async (req, res) => {
  const { modelId }  = req.query

   const modelRuns = await prisma.modelRun.findMany({
     where: {
       modelId: modelId as string,
     }
   })

   return res.status(200).json({ modelRuns})
}
export default ModelRunsHandler;
