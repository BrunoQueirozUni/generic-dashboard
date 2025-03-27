import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="min-h-screen w-full flex flex-col flex-grow h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        {children}
      </body>
    </html>
  );
}
