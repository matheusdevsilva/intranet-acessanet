import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";

// carregar variáveis .env
dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

/* ===== MIDDLEWARES ===== */
app.use(cors());
app.use(express.json());

/* ===== ROTAS ===== */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);




/* ===== HEALTH CHECK ===== */
app.get("/", (req, res) => {
  res.json({ status: "API online 🚀" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});