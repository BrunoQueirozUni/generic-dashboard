"use client"

import { MyAPIs } from "./(informations)/MyAPIs";
import { LogsDeAcesso } from "./(informations)/LogsDeAcesso";
import { GerenciarChaves } from "./(informations)/GerenciarChaves";
import { GerarNovaChaveAPI } from "./(informations)/GerarNovaChaveAPI";
import { PageDescription, PageHeader, PageTitle } from "@/components/ui/pageConfig";

export default function GerenciarAPI() {
   return (
      <>
         <PageHeader>
            <PageTitle>Gerenciamento de APIs</PageTitle>
            <PageDescription>
               Bem-vindo ao painel de Gerenciamento de APIs
            </PageDescription>
         </PageHeader>
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