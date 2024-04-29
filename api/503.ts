import { NowRequest, NowResponse } from "@vercel/node";

export default async (
    request: NowRequest,
    response: NowResponse
): Promise<void> => {
    response.setHeader("cache-control", "s-maxage=31536000");
    response.status(503).send("503 Service Unavailable");
    return;
};