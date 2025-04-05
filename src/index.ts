console.log("Starting server...");
import "dotenv/config";
import { serve } from "@hono/node-server";
import { allRoutes } from "./routes/routes.js";

console.log("Routes imported successfully.");

serve(allRoutes);

console.log("Server is running at http://localhost:3000/");
