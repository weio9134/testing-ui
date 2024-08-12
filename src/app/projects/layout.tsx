import "../globals.css";
import GoTo from "@/components/GoTo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4">
      {children}
      <GoTo url={"/"} text={"Go Back"} />
    </div>
  );
}
