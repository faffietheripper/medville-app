import "./globals.css";
import { Inter } from "next/font/google";
import BacktoTop from "../components/BacktoTop/BacktoTop";
import Providers from "@/components/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medville Health",
  description: "Telemedicine Software",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <BacktoTop />
        </Providers>
      </body>
    </html>
  );
}
