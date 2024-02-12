import AllowCors from "@/middlewares/middleware";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string;
};

function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({ name: "Naufal" });
}

export default AllowCors(handler);
