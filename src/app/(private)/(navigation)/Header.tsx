import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";

const user = {
   icon: Settings, label: "", href: "/configuracoes"
}

export function Header() {
   return (
      <>
         <header className="py-2 w-full border-b border-gray-800 bg-gray-900/50 px-10 pl-18 flex items-center justify-end gap-2">
            <Button variant="gray" size="icon" className="relative bg-transparent border-0">
               <Bell className="h-5 w-5 text-gray-400" />
               <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
            </Button>
            <Link href={user.href}
               className="text-gray-400 hover:text-primary hover:bg-gray-800/50 rounded-lg transition-colors p-3"
            >
               {user.icon && <user.icon className="w-5 h-5" />}
               {user.label}
            </Link>
            <Avatar className="size-[50px] select-none items-center justify-center overflow-hidden rounded-full">
               <AvatarImage className="size-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMeYKkxEQ7Yc8s1y46bs1i18BHtjlbe50CQQ&s" alt="" />
               <AvatarFallback className="flex size-full items-center justify-center bg-gray-600 font-medium">AKA</AvatarFallback>
            </Avatar>
         </header>
      </>
   )
}