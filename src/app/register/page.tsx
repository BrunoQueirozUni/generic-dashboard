"use client"

import Link from "next/link"
import Image from "next/image"
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { TermsDialog } from "@/components/terms-dialog"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Termos e condições
import { TermsContent } from "./(components)/TermsContent"
import { PrivacyContent } from "./(components)/PrivancyContent"

// Imagens
import Logo from "../../../public/imgs/alterra.gif"

export default function RegisterPage() {

   const form = useForm();

   const handleSubmit = form.handleSubmit((data) => {
      console.log(data);
   })

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
               <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-4 pt-6">
                     <div className="grid grid-cols-2 gap-4">

                        {/* Nome */}
                        <div className="space-y-2">
                           <Label htmlFor="firstName" className="text-white">
                              Nome
                           </Label>
                           <Input 
                              id="firstName" placeholder="João" 
                              className="bg-gray-800 border-gray-700 text-white" 
                              {...form.register("firstName")}
                              />
                        </div>

                        {/* Sobrenome */}
                        <div className="space-y-2">
                           <Label htmlFor="lastName" className="text-white">
                              Sobrenome
                           </Label>
                           <Input 
                              id="lastName" placeholder="Silva" 
                              className="bg-gray-800 border-gray-700 text-white" 
                              {...form.register("lastName")}
                           />
                        </div>
                     </div>

                     {/* Email */}
                     <div className="space-y-2">
                        <Label htmlFor="email" className="text-white">
                           Email
                        </Label>
                        <Input
                           id="email"
                           type="email"
                           placeholder="seu@email.com"
                           className="bg-gray-800 border-gray-700 text-white"
                           {...form.register("email")}
                        />
                     </div>

                     {/* Senha */}
                     <div className="space-y-2">
                        <Label htmlFor="password" className="text-white">
                           Senha
                        </Label>
                        <Input 
                           id="password" 
                           type="password" 
                           className="bg-gray-800 border-gray-700 text-white" 
                           {...form.register("password")}
                        />
                     </div>

                     {/* Confirmar senha */}
                     <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-white">
                           Confirmar Senha
                        </Label>
                        <Input 
                           id="confirmPassword" 
                           type="password" 
                           className="bg-gray-800 border-gray-700 text-white"
                           {...form.register("confirmPassword")} 
                        />
                     </div>

                     {/* Checkbox */}
                     <div className="flex items-center space-x-2 mb-4">
                        <Checkbox
                           id="terms"
                           className="border-gray-700 data-[state=checked]:bg-primary data-[state=checked]:border-primary cursor-pointer"
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

                     <Button className="w-full bg-primary text-black hover:bg-primary/90 cursor-pointer">Criar conta</Button>
                  </CardContent>
               </form>

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

