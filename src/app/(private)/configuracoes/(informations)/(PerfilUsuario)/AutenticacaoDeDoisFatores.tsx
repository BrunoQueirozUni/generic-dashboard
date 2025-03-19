"use client"

import * as Switch from "@radix-ui/react-switch";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle, Warning } from "@phosphor-icons/react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function AutenticacaoDeDoisFatores() {
   const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
   const [showTwoFactorDialog, setShowTwoFactorDialog] = useState(false)

   const handleToggle2FA = (checked: boolean) => {
      setTwoFactorEnabled(checked)
      if (checked) {
         setShowTwoFactorDialog(true)
      }
   }

   return (
      <>
         <Card className="px-6">
            <CardTitle className="px-0 pt-6 pb-1">Autenticação de Dois Fatores</CardTitle>
            <CardDescription>Adicione uma camada extra de segurança à sua conta</CardDescription>
            <CardContent>
               <div className="flex gap-15 items-center py-6">
                  <div>
                     <h1>Autenticação de dois fatores</h1>
                     <p className="text-md text-gray-400">Proteja sua conta com um segundo fator de autenticação</p>
                  </div>
                  <div>
                     <Switch.Root checked={twoFactorEnabled} onCheckedChange={handleToggle2FA} className="relative w-16 h-8 bg-gray-700 rounded-full transition data-[state=checked]:bg-primary focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                        <Switch.Thumb className="block w-6 h-6 bg-white rounded-full transition-transform transform translate-x-1 data-[state=checked]:translate-x-9" />
                     </Switch.Root>
                  </div>
               </div>
               <div>
                  {
                     twoFactorEnabled ? (
                        <div className="flex gap-3 text-green-800 dark:text-green-200 dark:bg-green-900/20 rounded-md px-5 py-4">
                           <CheckCircle size={25} weight="fill" />
                           <div>
                              <h1>Autenticação de dois fatores está ativada</h1>
                              <button onClick={() => setShowTwoFactorDialog(true)} className="text-sm hover:underline cursor-pointer p-0 m-0 text-green-700 dark:text-green-300"> clique para configurar novamente</button>
                           </div>
                        </div>
                     ) : (
                        <div className="flex gap-3 text-yellow-800 dark:text-yellow-200 bg-green-50 dark:bg-green-900/20 rounded-md px-5 py-4">
                           <Warning size={25} weight="fill" />
                           <div>
                              <h1>Atenção!</h1>
                              <p className="text-sm">Recomendamos ativar a autenticação de dois fatores para maior segurança</p>
                           </div>
                        </div>
                     )
                  }
               </div>
            </CardContent>
            <Dialog open={showTwoFactorDialog} onOpenChange={setShowTwoFactorDialog}>
               <DialogContent>
                  <DialogHeader className="text-white">
                     <DialogTitle>Configurar Autenticação de Dois Fatores</DialogTitle>
                     <DialogDescription>Escaneie o código QR abaixo com seu aplicativo de autenticação</DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center justify-center space-y-4 text-white">
                     <div className="bg-white p-4 inline-block">
                        {/* Placeholder para o QR code */}
                        <div className="w-48 h-48 bg-gray-200 text-black flex items-center justify-center">QR Code</div>
                     </div>
                     <div className="w-full space-y-2">
                        <Label htmlFor="verification-code">Código de Verificação</Label>
                        <Input id="verification-code" placeholder="Digite o código de 6 dígitos" className="mt-1" />
                     </div>
                     <div className="flex space-x-2 w-full">
                        <Button variant="white" className="flex-1" onClick={() => setShowTwoFactorDialog(false)}>
                           Verificar e Ativar
                        </Button>
                        <Button
                           variant="gray"
                           className="flex-1"
                           onClick={() => {
                              setTwoFactorEnabled(false)
                              setShowTwoFactorDialog(false)
                           }}
                        >
                           Cancelar
                        </Button>
                     </div>
                  </div>
               </DialogContent>
            </Dialog>
         </Card>
      </>
   )
}