"use client"

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { TermsDialog } from "@/components/terms-dialog"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Imagens
import Logo from "../../../public/imgs/alterra.gif"
import { TermsContent } from "./(components)/TermsContent"
import { PrivacyContent } from "./(components)/PrivancyContent"

export default function RegisterPage() {

   //Termos
   const termsContent = (
      <TermsContent />
   )
   const privacyContent = (
     <PrivacyContent />
   )

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
               <CardContent className="space-y-4 pt-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">
                           Nome
                        </Label>
                        <Input id="firstName" placeholder="João" className="bg-gray-800 border-gray-700 text-white" />
                     </div>
                     <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">
                           Sobrenome
                        </Label>
                        <Input id="lastName" placeholder="Silva" className="bg-gray-800 border-gray-700 text-white" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="email" className="text-white">
                        Email
                     </Label>
                     <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="bg-gray-800 border-gray-700 text-white"
                     />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="password" className="text-white">
                        Senha
                     </Label>
                     <Input id="password" type="password" className="bg-gray-800 border-gray-700 text-white" />
                  </div>
                  <div className="space-y-2">
                     <Label htmlFor="confirmPassword" className="text-white">
                        Confirmar Senha
                     </Label>
                     <Input id="confirmPassword" type="password" className="bg-gray-800 border-gray-700 text-white" />
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                     <Checkbox
                        id="terms"
                        className="border-gray-700 data-[state=checked]:bg-[#9FE870] data-[state=checked]:border-[#9FE870] cursor-pointer"
                     />
                     <label
                        htmlFor="terms"
                        className="text-sm text-gray-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                     >
                        Eu aceito os{" "}
                        <TermsDialog
                           title="Termos de Serviço" 
                           content={termsContent} triggerText="termos de serviço"
                        />
                        {" "}
                        e
                        {" "}
                        <TermsDialog
                           title="Política de Privacidade"
                           content={privacyContent}
                           triggerText="política de privacidade"
                        />
                     </label>
                  </div>

                  <Button className="w-full bg-[#9FE870] text-black hover:bg-[#9FE870]/90 cursor-pointer">Criar conta</Button>
               </CardContent>
               <CardFooter className="justify-center pb-6">
                  <p className="text-sm text-gray-400">
                     Já tem uma conta?{" "}
                     <Link href="/login" className="text-[#9FE870] hover:underline">
                        Entrar
                     </Link>
                  </p>
               </CardFooter>
            </Card>
         </div>
      </div>
   )
}

