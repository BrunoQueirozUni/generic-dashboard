"use client"

import Link from "next/link";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { LayoutDashboard, KeySquare, CreditCard, ChartNoAxesColumnIncreasing, Search, Settings } from "lucide-react";

// Imagens
import Logo from "../../../../public/imgs/alterra.gif"

const menuItems = [
   {
      title: "PRINCIPAL",
      items: [
         { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
         { icon: KeySquare, label: "Gerenciar APIs", href: "/gerenciar-api" },
         { icon: CreditCard, label: "Faturamento", href: "/faturamento" },
         { icon: ChartNoAxesColumnIncreasing, label: "Monitoramento", href: "/monitoramento" },
         { icon: Search, label: "Consulta de Dados", href: "/consulta-de-dados" },
      ]
   },
]

const user = {
   icon: Settings, label: "", href: "/configuracoes"
}

export function Sidebar() {

   const pathname = usePathname();

   return (
      <aside className="w-56 bg-gray-900/50 backdrop-blur-xl border-r border-gray-800 py-6 px-4 hidden lg:flex lg:flex-col">
         <div className="flex justify-center items-center mb-8">
            <Image src={Logo} width={90} height={90} alt="Logo" />
         </div>
         <nav className="h-full">
            {
               menuItems.map((section) => (
                  <div key={section.title} className="h-full">
                     <h2 className="text-xs font-semibold text-gray-400 mb-2">{section.title}</h2>
                     <div className="flex flex-col justify-between h-full">
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
                        <ul className="flex flex-col justify-end">
                           <div key={section.title} className="flex items-center justify-between py-6">
                              <div className="flex items-center gap-2">
                                 <Avatar className="size-[50px] select-none items-center justify-center overflow-hidden rounded-full">
                                    <AvatarImage className="size-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeYKkxEQ7Yc8s1y46bs1i18BHtjlbe50CQQ&s" alt="" />
                                    <AvatarFallback className="flex size-full items-center justify-center bg-gray-600 font-medium">AKA</AvatarFallback>
                                 </Avatar>
                                 <span className="text-white font-semibold">Guilliman</span>
                              </div>
                              <Link href={user.href}
                                 className="text-gray-300 hover:text-primary hover:bg-gray-800/50 rounded-lg transition-colors p-3"
                              >
                                 {user.icon && <user.icon className="w-6 h-6" />}
                                 {user.label}
                              </Link>
                           </div>
                        </ul>
                     </div>
                  </div>
               ))
            }
         </nav>
      </aside>
   )
}