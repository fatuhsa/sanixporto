export default function BentoCard({ children, className = "" }) {
  return (
    <div className={`bg-zinc-900 border border-zinc-800 rounded-3xl p-6 transition-all duration-300 hover:border-zinc-700 hover:scale-[1.01] ${className}`}>
      {children}
    </div>
  );
}
