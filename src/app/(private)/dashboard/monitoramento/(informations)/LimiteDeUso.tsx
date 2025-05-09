"use client"

import * as Progress from "@radix-ui/react-progress";

import { Warning } from "@phosphor-icons/react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function LimiteDeUso() {
   const currentUsage = 80000;
   const monthLimit = 100000;
   const usage = (currentUsage / monthLimit) * 100;

   return (
      <>
         <Card>
            <CardTitle>Limite de Uso</CardTitle>
            <CardContent>
               <Progress.Root
                  className="relative h-[20px] overflow-hidden rounded-full mb-3 border border-gray-700"
                  value={usage}
               >
                  <Progress.Indicator
                     className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full bg-white transition-transform duration-[660ms]"
                     style={{ transform: `translateX(-${100 - usage}%)` }}
                  />
               </Progress.Root>
               <p className="text-sm text-gray-400 mb-6">
                  {currentUsage.toLocaleString()} de {monthLimit.toLocaleString()} chamadas utilizadas este mês
               </p>
               {
                  usage >= 80 && (
                     <div className="flex gap-3 text-yellow-800 dark:text-yellow-200 dark:bg-yellow-900/20 rounded-md px-5 py-4">
                        <Warning size={25} weight="fill" />
                        <div>
                           <h1>Atenção!</h1>
                           <p className="text-sm">Você está próximo do seu limite mensal de uso. Considere fazer um upgrade do seu plano</p>
                        </div>
                     </div>
                  )
               }
            </CardContent>
         </Card>
      </>
   )
}