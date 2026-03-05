export default function Card({ title, children }: any) {
  return (
    <div className="card">
      <h4>{title}</h4>
      {children}
    </div>
  );
}