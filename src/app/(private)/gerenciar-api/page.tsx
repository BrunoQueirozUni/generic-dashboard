"use client"

import { MyAPIs } from "./(informations)/MyAPIs";
import { LogsDeAcesso } from "./(informations)/LogsDeAcesso";
import { GerenciarChaves } from "./(informations)/GerenciarChaves";
import { GerarNovaChaveAPI } from "./(informations)/GerarNovaChaveAPI";

export default function GerenciarAPI() {
   return (
      <>
         <div className="text-white">
            <h1 className="text-3xl font-semibold">Gerenciamento de APIs</h1>
            <p className="text-xl text-muted-foreground text-gray-400">
               Bem-vindo ao painel de Gerenciamento de APIs
            </p>
         </div>
         <div>
            <div>
               <MyAPIs />
            </div>
            <div className="pt-8 flex gap-8 justify-between">
               <GerarNovaChaveAPI />
               <GerenciarChaves />
            </div>
            <div className="pt-8">
               <LogsDeAcesso />
            </div>
         </div>
      </>
   )
}