"use client"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User, SignOut, GearFine, Bell } from "@phosphor-icons/react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const user = [
   { icon: User, label: "Perfil", href: "/dashboard/configuracoes" },
   { icon: GearFine, label: "Configurações", href: "/dashboard/configuracoes" },
   { icon: SignOut, label: "Sair", href: "" },
]

export function Header() {
   return (
      <>
         <header className="py-2 w-full border-b border-gray-800 bg-gray-900/50 px-10 pl-18 flex items-center justify-end gap-4">
            <Button variant="gray" size="icon" className="relative bg-transparent border-0">
               <Bell className="h-7 w-7 text-gray-400" />
               <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
            </Button>
            <DropdownMenu.Root>
               <DropdownMenu.Trigger asChild>

                  <Avatar className="size-[45px] select-none items-center justify-center overflow-hidden rounded-full cursor-pointer">
                     <AvatarImage className="size-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeYKkxEQ7Yc8s1y46bs1i18BHtjlbe50CQQ&s" alt="" />
                     <AvatarFallback className="flex size-full items-center justify-center bg-gray-600 font-medium">AKA</AvatarFallback>
                  </Avatar>

               </DropdownMenu.Trigger>
               <DropdownMenu.Portal>
                  <DropdownMenu.Content
                     className="min-w-[280px] bg-gray-900 text-white rounded-md shadow-md border border-gray-600 py-1"
                     align="end"
                  >
                     <DropdownMenu.Item asChild>
                        <div className="flex items-center gap-2 px-3 py-1 text-sm outline-none">

                           <Avatar className="size-[35px] select-none items-center justify-center overflow-hidden rounded-full cursor-pointer">
                              <AvatarImage className="size-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeYKkxEQ7Yc8s1y46bs1i18BHtjlbe50CQQ&s" alt="" />
                              <AvatarFallback className="flex size-full items-center justify-center bg-gray-600 font-medium">AKA</AvatarFallback>
                           </Avatar>

                           <div>
                              <p className="text-[14px]">Roboute Guilliman</p>
                              <span className="text-[12px] text-gray-500">ultramarine@macragge.com</span>
                           </div>
                        </div>
                     </DropdownMenu.Item>
                     <DropdownMenu.Separator className="h-px bg-gray-700 my-1" />
                     {
                        user.map((item) => (
                           <DropdownMenu.Item asChild key={item.label} >
                              {
                                 item.label === "Sair" ? (
                                    <div className="flex flex-col w-full outline-none">
                                       <DropdownMenu.Separator className="h-px bg-gray-700 my-1" />
                                       <div className="px-1">
                                          <Link
                                             href={item.href}
                                             className="w-full flex items-center gap-2 px-2 py-2 rounded-sm hover:bg-red-700/40 transition outline-none text-sm"
                                          >
                                             {item.icon && <item.icon className="w-4 h-4" />}
                                             {item.label}
                                          </Link>
                                       </div>
                                    </div>
                                 ) : (
                                    <div className="px-1 outline-none">
                                       <Link
                                          href={item.href}
                                          className="w-full flex items-center gap-2 px-2 py-2 rounded-sm hover:bg-gray-700 transition outline-none text-sm"
                                       >
                                          {item.icon && <item.icon className="w-4 h-4" />}
                                          {item.label}
                                       </Link>
                                    </div>
                                 )
                              }
                           </DropdownMenu.Item>
                        ))
                     }
                     <DropdownMenu.Arrow className="fill-gray-900" />
                  </DropdownMenu.Content>
               </DropdownMenu.Portal>
            </DropdownMenu.Root >
         </header >
      </>
   )
}
