import Sidebar from "./Sidebar";
import Header from "./Header";
import "../styles/layout.css";

export default function MainLayout({ children }: any) {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main-area">
        <Header />

        <div className="page-content">
          {children}
        </div>
      </div>

    </div>
  );
}