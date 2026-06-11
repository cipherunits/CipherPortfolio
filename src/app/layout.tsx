import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Cipher Unit",
  description: "Cipher Unit is a software development company focused on building modern open-source tools for developers by developers.",
  icons: {
    icon: "/CipherUnit.png",
    shortcut: "/CipherUnit.png",
    apple: "/CipherUnit.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}