import DashboardNav from "@/components/DashboardNav";

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-white flex-col h-full overflow-hidden">
      <DashboardNav />
      {children}
    </div>
  );
}