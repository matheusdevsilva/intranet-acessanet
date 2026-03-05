import { useAuth } from "../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header>
      <h3>Dashboard</h3>

      <div className="user">
        <span>{user?.username}</span>
        <button onClick={logout}>Sair</button>
      </div>
    </header>
  );
}