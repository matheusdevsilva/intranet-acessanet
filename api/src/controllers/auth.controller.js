import pool from "../database/db.js";
import bcrypt from "bcrypt";
import generateToken from "../services/token.service.js";

/* ================= LOGIN ================= */
export async function login(req, res) {
    console.log("Rota login chamada");
    const { username, password } = req.body;
    console.log(username)
    try {
        const [users] = await pool.query(
            "SELECT * FROM users WHERE username = ?",
            [username]
        );

        if (!users.length) {
            return res.status(401).json({
                message: "Usuário inválido",
            });
        }

        const user = users[0];

        const valid = await bcrypt.compare(password, user.password);

        if (!valid) {
            return res.status(401).json({
                message: "Senha inválida",
            });
        }

        const token = generateToken(user);

        return res.json({
            token,
            user: {
                id: user.id,
                username: user.username,
                role: user.role,
            },
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
}

/* ================= USER LOGADO ================= */
export async function me(req, res) {
    return res.json(req.user);
}
