import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Path Locator - Mac Drones",
  description: "Interactive map for drone path planning",
};

export default function PathLocatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen overflow-hidden">
      {children}
    </div>
  );
}