import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for M-Pesa STK Push
  app.post("/api/mpesa/stk-push", async (req, res) => {
    const { phone, amount } = req.body;
    
    // Placeholder implementation
    console.log(`STK Push requested for ${phone} with amount ${amount}`);
    
    // In a real app, you would:
    // 1. Get OAuth token from Daraja
    // 2. Format request payload
    // 3. Send POST to Daraja STK Push endpoint
    
    res.json({ success: true, message: "STK Push initiated successfully" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
