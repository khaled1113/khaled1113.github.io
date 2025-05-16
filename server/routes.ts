import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // This is a static website with no backend API routes
  
  const httpServer = createServer(app);

  return httpServer;
}
