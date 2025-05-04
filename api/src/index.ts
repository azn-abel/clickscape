import { Hono } from "hono";
import { D1Database } from "@cloudflare/workers-types";

const app = new Hono<{
  Bindings: {
    DB: D1Database;
  };
}>();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
