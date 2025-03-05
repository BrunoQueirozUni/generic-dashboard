"use client"

import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "@/components/ui/button";
import { MetodoDePagamentoTabs } from "./MetodoDePagamentoTabs";


export function AdicionarMetodoDePagamento() {
   return (
      <>
         <Dialog.Root>
            <Dialog.Trigger asChild>
               <Button variant="white">
                  Adicionar Metedo de Pagamento
               </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
               <Dialog.Overlay className="fixed inset-0 bg-black/60" />
               <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl rounded-lg px-8 py-6">
                  <Dialog.Title className="text-xl pb-6">
                     Adicionar novo Método de Pagamento
                  </Dialog.Title>
                  <div className="pb-6">
                     <h1 className="pb-3">Selecione o método:</h1>
                     <MetodoDePagamentoTabs />
                  </div>
                  <div className="flex gap-4">
                     <Dialog.Close asChild>
                        <Button variant="green">Salvar</Button>
                     </Dialog.Close>
                     <Dialog.Close asChild>
                        <Button variant="red">Cancelar</Button>
                     </Dialog.Close>
                  </div>
               </Dialog.Content>
            </Dialog.Portal>
         </Dialog.Root>
      </>
   )
}