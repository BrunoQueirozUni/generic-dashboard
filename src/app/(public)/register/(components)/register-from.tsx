"use client"

import Form from "next/form"
import registerAction from "@/ts/registerAction"

import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@radix-ui/react-checkbox"
import { TermsDialog } from "@/components/terms-dialog"

// Termos e condições
import { TermsContent } from "./TermsContent"
import { PrivacyContent } from "./PrivancyContent"

export default function RegisterForm() {

      //Termos
      const termsContent = (
         <TermsContent />
      )
      const privacyContent = (
         <PrivacyContent />
      )

   return (
      <>
         <Form action={registerAction} className="space-y-4 pt-6">
            <div className="grid grid-cols-2 gap-4">

               {/* Nome */}
               <div className="space-y-2">
                  <Label className="text-white">
                     Nome
                  </Label>
                  <Input
                     name="firstName"
                     type="text"
                     placeholder="João"
                     className="bg-gray-800 border-gray-700 text-white"
                  />
               </div>

               {/* Sobrenome */}
               <div className="space-y-2">
                  <Label className="text-white">
                     Sobrenome
                  </Label>
                  <Input
                     name="lastName"
                     type="text"
                     placeholder="Silva"
                     className="bg-gray-800 border-gray-700 text-white"
                  />
               </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
               <Label htmlFor="email" className="text-white">
                  Email
               </Label>
               <Input
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="bg-gray-800 border-gray-700 text-white"
               />
            </div>

            {/* Senha */}
            <div className="space-y-2">
               <Label className="text-white">
                  Senha
               </Label>
               <Input
                  name="password"
                  type="password"
                  className="bg-gray-800 border-gray-700 text-white"
               />
            </div>

            {/* Confirmar senha */}
            <div className="space-y-2">
               <Label className="text-white">
                  Confirmar Senha
               </Label>
               <Input
                  name="confirmPassword"
                  type="password"
                  className="bg-gray-800 border-gray-700 text-white"
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

            <Button type="submit" className="w-full bg-primary text-black hover:bg-primary/90 cursor-pointer">Criar conta</Button>
         </Form>
      </>
   )
}