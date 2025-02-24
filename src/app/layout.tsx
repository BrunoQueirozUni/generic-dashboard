"use client";

import { usePathname } from "next/navigation";
import { Header } from "./(private)/(navigation)/Header";
import { Sidebar } from "./(private)/(navigation)/Sidebar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Rotas onde o Sidebar e Header NÃO devem aparecer
  const hiddenRoutes = ["/login", "/register",];

  // Verifica se a rota atual está dentro do array
  const hideNavigation = hiddenRoutes.includes(pathname);

  return (
    <html lang="pt-br">
      <body>
        <div className="min-h-screen w-full flex bg-gradient-to-br from-black via-gray-900 to-black">
          {/* Exibir Sidebar e Header apenas se não estiver nas rotas ocultas */}
          {!hideNavigation && <Sidebar />}
          <div className="flex flex-col flex-grow h-screen">
            {!hideNavigation && <Header />}
            <div className="flex flex-col gap-8 px-20 py-5 overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
