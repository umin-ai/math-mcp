// src/math.ts
import { FastMCP } from "fastmcp";
import { z } from "zod";

async function start() {
  const server = new FastMCP({ name: "math", version: "1.0.0" });

  server.addTool({
    name: "add",
    description: "Add two numbers",
    parameters: z.object({ a: z.number(), b: z.number() }),
    execute: async ({ a, b }, _ctx) => {
      return (a + b).toString();
    },
  });

  server.addTool({
    name: "subtract",
    description: "Subtract two numbers",
    parameters: z.object({ a: z.number(), b: z.number() }),
    execute: async ({ a, b }, _ctx) => {
      console.log("Subtracting", a, "and", b);
      return (a - b).toString();
    },
  });

  server.addTool({
    name: "multiply",
    description: "Multiply two numbers",
    parameters: z.object({ a: z.number(), b: z.number() }),
    execute: async ({ a, b }, _ctx) => {
      return (a * b).toString();
    },
  });

  server.addTool({
    name: "divide",
    description: "Divide two numbers",
    parameters: z.object({ a: z.number(), b: z.number() }),
    execute: async ({ a, b }, _ctx) => {
      if (b === 0) {
        throw new Error("Division by zero");
      }
      return (a / b).toString();
    },
  });

  await server.start({
    transportType: "httpStream",
    httpStream: { port: 8083 },
  });
  console.log("math MCP server listening on http://localhost:8083/mcp");
}

start().catch((err) => {
  console.error("Failed to start math server:", err);
  process.exit(1);
});
