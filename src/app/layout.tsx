import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen bg-gradient-to-br from-black to-slate-900 text-slate-100 flex">
        {children}
      </body>
    </html>
  );
}
