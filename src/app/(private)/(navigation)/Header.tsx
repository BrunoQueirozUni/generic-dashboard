import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
   return (
      <>
         <header className="py-2 w-full border-b border-gray-800 bg-gray-900/50 px-10 pl-18 flex items-center justify-end gap-2">
            <Button variant="gray" size="icon" className="relative bg-transparent border-0">
               <Bell className="h-5 w-5 text-gray-400" />
               <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
            </Button>
            <Button variant="gray" size="icon" className="bg-transparent border-0">
               <Settings className="h-5 w-5 text-gray-400" />
            </Button>
         </header>
      </>
   )
}