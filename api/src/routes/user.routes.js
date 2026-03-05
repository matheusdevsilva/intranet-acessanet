import { Router } from "express";
import auth from "../middlewares/auth.middleware.js";
import permission from "../middlewares/permission.middleware.js";

const router = Router();

router.get(
  "/",
  auth,
  permission("users.view"),
  (req, res) => {
    res.json({ message: "Lista de usuários" });
  }
);

export default router;