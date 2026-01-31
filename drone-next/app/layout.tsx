import "./globals.css";
import Header from "../components/myComponents/header";
import { Analytics } from "@vercel/analytics/next";
export const metadata = {
  title: "McMaster Drone Team",
  description: "Explore the future of aerial technology with Mac Drones.",
  icons: {
    icon: "/favicon.png", // Make sure favicon.ico is in the public folder
  },
  openGraph: {
    title: "Mac Drones",
    description: "Explore the future of aerial technology with Mac Drones.",
    url: "https://www.macdrones.ca",
    siteName: "Mac Drones",
    images: [
      {
        url: "https://www.macdrones.ca/logo/logo.png", // Ensure this URL is accessible
        width: 1200,
        height: 630,
        alt: "Mac Drones Logo",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-[100vw]">
        {/* Fixed Header */}
        <div className="w-full fixed top-0 z-50 bg-black">
          <Header />
        </div>

        <main className="pt-[60px]">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
