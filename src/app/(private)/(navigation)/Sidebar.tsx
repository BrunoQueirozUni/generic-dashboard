"use client"

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { LayoutDashboard, KeySquare, CreditCard, ChartNoAxesColumnIncreasing, Search, BadgeHelp, FileText, BookText } from "lucide-react";

// Imagens
import Logo from "../../../../public/imgs/alterra.gif"

const menuItems = [
   {
      title: "PRINCIPAL",
      items: [
         { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
         { icon: KeySquare, label: "Gerenciar APIs", href: "/dashboard/gerenciar-api" },
         { icon: CreditCard, label: "Faturamento", href: "/dashboard/faturamento" },
         { icon: ChartNoAxesColumnIncreasing, label: "Monitoramento", href: "/dashboard/monitoramento" },
         { icon: Search, label: "Consulta de Dados", href: "/dashboard/consulta-de-dados" },
      ]
   },
   {
      title: "SUPORTE",
      items: [
         { icon: BadgeHelp, label: "Suporte", href: "/dashboard/suporte" },
         { icon: FileText, label: "Documentação", href: "/dashboard/documentacao" },
         { icon: "", label: "Relatórios", href: "/relatorios" },
      ]
   }
]

export function Sidebar() {

   const pathname = usePathname();

   return (
      <aside className="w-56 bg-gray-900/50 backdrop-blur-xl border-r border-gray-800 py-6 px-4 hidden lg:flex lg:flex-col flex-shrink-0">
         <div className="flex justify-center items-center mb-8">
            <Image src={Logo} width={90} height={90} alt="Logo" />
         </div>
         <nav className="space-y-4">
            {
               menuItems.map((section) => (
                  <div key={section.title}>
                     <h2 className="text-xs font-semibold text-gray-400 mb-2">{section.title}</h2>
                     <ul className="space-y-1">
                        {section.items?.map((item) => (
                           <li key={item.label}>
                              <Link
                                 href={item.href}
                                 className={`flex gap-2 text-sm rounded-lg px-3 py-2 transition-colors ${pathname === item.href ? "text-primary" : "text-gray-300 hover:text-primary hover:bg-gray-800/50"
                                    }`}
                              >
                                 {item.icon && <item.icon className="w-5 h-5" />}
                                 {item.label}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))
            }
         </nav>
      </aside>
   )
}