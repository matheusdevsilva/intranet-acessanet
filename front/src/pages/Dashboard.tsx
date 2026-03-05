import MainLayout from "../components/MainLayout";
import "../styles/dashboard.css";

export default function Dashboard() {
  return (

    <MainLayout>
      <div className="dashboard">
        <h2 className="page-title">Visão Geral</h2>

        <div className="cards">
          <div className="card">
            <h3>Projetos</h3>
            <p className="number">24</p>
          </div>

          <div className="card">
            <h3>Clientes</h3>
            <p className="number">18</p>
          </div>

          <div className="card">
            <h3>Faturamento</h3>
            <p className="number">R$ 45.000</p>
          </div>

          <div className="card">
            <h3>Usuários</h3>
            <p className="number">12</p>
          </div>
        </div>
      </div>

    </MainLayout>
  );
}