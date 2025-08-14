import express, { Router, Request, Response } from "express";
import dotenv from "dotenv";

// Load environment
const environment = process.env.NODE_ENV ?? "local";
dotenv.config({ path: `.env.${environment}` });

const app = express();
const router = Router();

// Define route
router.get("/", (req: Request, res: Response) =>
  res.status(200).send(`
        <h1>Welcome to node-ts-api</h1>
        <p>Environment: ${environment}</p>
        <p>Port: ${process.env.PORT ?? 3000}</p>
    `)
);

// Attach router
app.use("/", router);

// Start server
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${environment}:${PORT}`);
});

export default router;
