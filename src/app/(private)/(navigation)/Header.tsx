import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Bell, Search, Settings } from "lucide-react";

export function Header() {
   return (
      <>
         <header className="py-2 w-full border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl px-10 pl-18 flex items-center justify-between">
            <div className="flex items-center flex-1 max-w-xl">
               <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                     type="search"
                     placeholder="Buscar..."
                     className="pl-10 bg-gray-800/50 border-gray-700 focus:border-primary text-gray-500"
                  />
               </div>
            </div>
            <div className="flex items-center space-x-4">
               <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5 text-gray-400" />
                  <span className="absolute top-1 right-1 h-2 w-2 bg-primary rounded-full" />
               </Button>
               <Button variant="ghost" size="icon">
                  <Settings className="h-5 w-5 text-gray-400" />
               </Button>
            </div>
         </header>
      </>
   )
}