import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Cipher Unit",
  description: "The portfolio of cipherunits, a software development company specializing in web and mobile applications.",
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
      <body className="min-h-screen flex justify-center">
        <div className="w-full max-w-6xl p-6">
          {children}
        </div>
      </body>
    </html>
  );
}