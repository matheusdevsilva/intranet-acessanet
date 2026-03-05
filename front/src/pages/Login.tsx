import { useState } from "react";
import { User, Lock } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/login.css";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();

    async function handleLogin() {
        try {
            await login(username, password);
            window.location.href = "/dashboard";
        } catch {
            alert("Usuário ou senha inválidos");
        }
    }

    return (
        <div className="login-container">
            {/* LADO ESQUERDO (BRANDING) */}
            <div className="login-brand">
                <img src="/logo.png" alt="Logo" className="brand-logo" />

                <h1>Portal Corporativo</h1>
                <p>
                    Gerencie projetos, clientes e operações em uma plataforma moderna e
                    segura.
                </p>
            </div>

            {/* LOGIN */}
            <motion.div
                className="login-panel"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="login-box">
                    <h2>Acessar sistema</h2>

                    <div className="input-group">
                        <User size={20} />
                        <input
                            type="text"
                            placeholder="Usuário"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <Lock size={20} />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                        />
                    </div>

                    <button onClick={handleLogin}>Entrar</button>
                </div>
            </motion.div>
        </div>
    );
}