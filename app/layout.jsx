import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/ConvexClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Miljövariabler för Convex & Clerk


export const metadata = {
  title: "Taskmate",
  description: "En strukturerad todo-app byggd med Next.js & Convex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
          </body>
        </html>

  );
}
