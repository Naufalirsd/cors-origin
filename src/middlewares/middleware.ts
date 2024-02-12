import type { NextApiRequest, NextApiResponse } from "next";

const AllowCors =
    (fn: any) => async (req: NextApiRequest, res: NextApiResponse) => {
        res.setHeader("Access-Control-Allow-Origin", process.env.ORIGIN ?? "*"); // replace this your actual origin

        return fn(req, res);
    };

export default AllowCors;
