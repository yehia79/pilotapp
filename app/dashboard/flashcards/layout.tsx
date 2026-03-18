import DashboardNav from "@/components/DashboardNav";

export default function FlashcardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full overflow-hidden bg-white">
      <DashboardNav />
      {children}
    </div>
  );
}