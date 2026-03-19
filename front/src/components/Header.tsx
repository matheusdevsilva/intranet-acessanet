import { useAuth } from "../context/AuthContext";


export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">

      <div className="header-left">
        <span className="page-title">Dashboard</span>
      </div>

      <div className="header-right">

        <div className="user">
          <div className="avatar">
            {user?.username?.charAt(0).toUpperCase()}
          </div>
          <span>{user?.username}</span>
        </div>

        <button className="logout-btn" onClick={logout}>
          Sair
        </button>

      </div>

    </header>
  );
}