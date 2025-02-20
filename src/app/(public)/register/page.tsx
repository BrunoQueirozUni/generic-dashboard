
// Default imports
import Link from "next/link"
import Image from "next/image"
import RegisterForm from "./(components)/register-from"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Imagens
import Logo from "../../../../public/imgs/alterra.gif"

export default async function RegisterPage() {
   return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4">
         <div className="w-full max-w-[420px] space-y-4">
            <div className="flex flex-col items-center space-y-2">
               <Image
                  src={Logo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="mb-4 select-none"
               />
               <h1 className="text-2xl font-bold text-white">Criar conta</h1>
               <p className="text-sm text-gray-400">Preencha os dados abaixo para se registrar</p>
            </div>
            <Card className="border-0 bg-gray-900/50 backdrop-blur-xl">
               <CardContent>
                  <RegisterForm />
               </CardContent>
               <CardFooter className="justify-center pb-6">
                  <p className="text-sm text-gray-400">
                     Já tem uma conta?{" "}
                     <Link href="/login" className="text-primary hover:underline">
                        Entrar
                     </Link>
                  </p>
               </CardFooter>
            </Card>
         </div>
      </div>
   )
}

