import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "./_components/sidebar/SideBar";
import NavBar from "./_components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dukaan",
  description: "Launch your online store in 30 seconds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex">
          <Sidebar />
          <div className="w-full">
            <NavBar />
            <div>{children}</div>
          </div>
        </main>
      </body>
    </html>
  );
}
