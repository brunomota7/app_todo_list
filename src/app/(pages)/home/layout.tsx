import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../../../styles/globals.css";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "To-Do List | Home",
  description: "Sua agenda digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
          {children}
      </body>
    </html>
  );
}
