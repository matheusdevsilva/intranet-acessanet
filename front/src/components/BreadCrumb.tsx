import { useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  return <span>{location.pathname}</span>;
}