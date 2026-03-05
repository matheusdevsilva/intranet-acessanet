import Sidebar from "./Sidebar";
import Header from "./Header";
import "../styles/layout.css"

export default function MainLayout({ children }: any) {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}