import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Acessa Admin</h2>

      <Link className="menu-item active" to="/dashboard">Dashboard</Link>
      <Link className="menu-item" to="/usuarios">Usuários</Link>
      <Link className="menu-item" to="/usuarios">Planos</Link>
      <Link className="menu-item" to="/usuarios">Financeiro</Link>
      <Link className="menu-item" to="/chat-interno">Chat Interno</Link>
      <Link className="menu-item" to="/chat-clientes">Chat Clientes</Link>
      <Link className="menu-item" to="/usuarios">Suporte</Link>
      <Link className="menu-item" to="/financeiro">Rede</Link>

      <Link className="menu-item" to="/tickets">Relatorios</Link>
    </aside>
  );
}