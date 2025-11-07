import http from "http";
import redis from "../lib/redis";
import { wsClient } from "../utils/config";

export function startHealthServer() {
  http
    .createServer(async (req, res) => {
      if (req.url !== "/health") {
        res.writeHead(404);
        return res.end();
      }

      try {
        const block = await wsClient.getBlockNumber();
        await redis.ping();

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({
            status: "ok",
            block,
            redis: "connected",
          })
        );
      } catch (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({
            status: "degraded",
            error: err instanceof Error ? err.message : String(err),
          })
        );
      }
    })
    .listen(process.env.PORT || 3000);
}
