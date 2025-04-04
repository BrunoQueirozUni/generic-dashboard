import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Imagens
import Logo from "../../public/imgs/alterra.gif";

export default function NotFound() {
   return (
      <div className="min-h-screen w-full flex items-center justify-center p-4">
         <div className="w-full max-w-[400px] space-y-6">
            <div className="flex flex-col items-center space-y-2">
               <Image
                  src={Logo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="mb-4"
               />
               <h1 className="text-4xl font-bold text-white">404</h1>
               <p className="text-xl text-gray-400">Página não encontrada</p>
            </div>

            <Card className="border-0 bg-gray-900/50 backdrop-blur-xl">
               <CardContent className="space-y-4 pt-6 pb-6">
                  <p className="text-center text-gray-300">
                     Ops! A página que você está procurando não existe ou foi movida.
                  </p>
                  <div className="flex justify-center">
                     <Link href="javascript:history.back()">
                        <Button className="bg-primary text-black hover:bg-primary/90 cursor-pointer">Voltar para a página inicial</Button>
                     </Link>
                  </div>
               </CardContent>
            </Card>

            <p className="text-center text-sm text-gray-500">
               Se você acha que isso é um erro, por favor{" "}
               <Link href="/contato" className="text-primary hover:underline">
                  entre em contato
               </Link>{" "}
               com nossa equipe de suporte.
            </p>
         </div>
      </div>
   )
}