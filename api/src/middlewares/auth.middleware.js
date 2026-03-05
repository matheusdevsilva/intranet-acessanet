import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/env.js";

export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  // verifica header
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Token não enviado",
    });
  }

  // pega token
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, jwtSecret);

    // adiciona usuário na request
    req.user = decoded;

    return next();
  } catch (error) {
    return res.status(401).json({
      message: "Token inválido ou expirado",
    });
  }
}