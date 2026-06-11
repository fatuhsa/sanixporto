export default function BentoGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4 py-12 auto-rows-[180px]">
      {children}
    </div>
  );
}
