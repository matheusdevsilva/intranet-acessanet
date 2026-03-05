import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";

interface User {
    id: number;
    username: string;
}

interface AuthContextType {
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType
);

export function AuthProvider({ children }: any) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    // verifica login ao abrir sistema
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setLoading(false);
            return;
        }

        api
            .get("/auth/me")
            .then((res) => setUser(res.data))
            .catch(() => logout())
            .finally(() => setLoading(false));
    }, []);

    async function login(username: string, password: string) {
        console.log("BaseURL:", api.defaults.baseURL);

        const response = await api.post("/auth/login", {
            username,
            password,
        });
        localStorage.setItem("token", response.data.token);

        // 🔥 salvar usuário no contexto
        setUser(response.data.user);

        console.log("Resposta login:", response.data);
    }

    function logout() {
        localStorage.removeItem("token");
        setUser(null);
        window.location.href = "/";
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}