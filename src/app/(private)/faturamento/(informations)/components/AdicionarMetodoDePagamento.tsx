"use client"

import { Button } from "@/components/ui/button";
import { CreditCard, CurrencyBtc, PixLogo } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { CreditCardIcon } from "lucide-react";

interface AdicionarMetodoDePagamentoProps {
   pix?: string;
   cartaoCredito?: string;
   cartaoDebito?: string;
   crypto?: [
      {
         bitcoin: string;
         ethereum: string;
         memecoin: string;
         outros: string;
      }
   ]
}

export function AdicionarMetodoDePagamento({ pix, cartaoCredito, cartaoDebito, crypto }: AdicionarMetodoDePagamentoProps) {
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
               <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl rounded-lg px-8 py-6">
                  <Dialog.Title className="text-xl pb-6">
                     Adicionar novo Método de Pagamento
                  </Dialog.Title>
                  <div className="pb-6">
                     <h1 className="pb-3">Selecione o método:</h1>
                     <div className="flex gap-4">
                        <Button title="PIX" variant="gray" className="p-3">
                           <PixLogo className="!w-6 !h-5" />
                        </Button>
                        <Button title="Cartão de Crédito" variant="gray" className="p-3">
                           <CreditCard className="!w-6 !h-5" />
                        </Button>
                        <Button title="Cartão de Débito" variant="gray" className="p-3">
                           <CreditCardIcon className="!w-6 !h-5" />
                        </Button>
                        <Button title="Crypto" variant="gray" className="p-3">
                           <CurrencyBtc className="!w-6 !h-5" />
                        </Button>
                     </div>
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