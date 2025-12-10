import http from "http";
import redis from "../lib/redis";
import { wsClient } from "../utils/config";

export function startHealthServer() {
  const server = http.createServer((req, res) => {
    if (req.url !== "/health") {
      res.writeHead(404);
      return res.end();
    }

    (async () => {
      try {
        const block = await wsClient.getBlockNumber();
        await redis.ping();

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({
            status: "ok",
            block: block.toString()migrate to v2,
            redis: "connected",
          })
        );
      } catch (err) {
        // Important: we respond *once* here
        if (!res.headersSent) {
          res.writeHead(500, { "Content-Type": "application/json" });
        }
        res.end(
          JSON.stringify({
            status: "degraded",
            error: err instanceof Error ? err.message : String(err),
          })
        );
      }
    })();
  });

  server.listen(process.env.PORT || 8080, () => {
    console.log(`Health server running on port ${process.env.PORT || 8080}`);
  });
}
