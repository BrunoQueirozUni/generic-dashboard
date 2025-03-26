"use client"

import * as Switch from "@radix-ui/react-switch";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const switchInfo = [
   { title: "Uso da API", description: "Receba alertas quando seu uso da API se aproximar do limite" },
   { title: "Faturamento", description: "Receba notificações sobre faturas e pagamentos" },
   { title: "Erros", description: "Seja notificado sobre erros críticos na API" },
   { title: "Segurança", description: "Receba alertas sobre atividades suspeitas ou alterações de segurança" },
   { title: "Marketing", description: "Receba atualizações sobre novos recursos e ofertas" },
]

// Componente alert
import { useAlert } from "@/components/Alert";

export function ConfiguracaoDeNotificacoes() {

   const { showAlert } = useAlert();

   return (
      <>
         <Card className="px-6">
            <CardTitle className="px-0 pt-6 pb-1">Configurações de Notificações</CardTitle>
            <CardDescription>Escolha quais notificações você deseja receber</CardDescription>
            <CardContent>
               <h2 className="text-xl pb-6 pt-8">Notificações por E-mail</h2>
               <div className="flex flex-col gap-4">
                  {
                     switchInfo.map((info) => (
                        <div key={info.title} className="flex gap-15 items-center justify-between">
                           <div>
                              <h3>{info.title}</h3>
                              <p className="text-md text-gray-400">{info.description}</p>
                           </div>
                           <div>
                              <Switch.Root defaultChecked className="relative w-12 h-6 bg-gray-500 rounded-full transition data-[state=checked]:bg-primary focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                                 <Switch.Thumb className="block w-4 h-4 bg-white rounded-full transition-transform transform translate-x-1 data-[state=checked]:translate-x-7" />
                              </Switch.Root>
                           </div>
                        </div>
                     ))
                  }
               </div>
               <Button onClick={() => showAlert("success")} variant="white" className="mt-6">Salvar Alterações</Button>
            </CardContent>
         </Card>
      </>
   )
}