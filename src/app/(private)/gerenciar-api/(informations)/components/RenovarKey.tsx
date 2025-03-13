import { items } from "../GerenciarChaves";
import { Button } from "@/components/ui/button";
import { ArrowsClockwise } from "@phosphor-icons/react";

import * as Dialog from "@radix-ui/react-dialog";

interface PermissionsProp {
   id: Number;
}

export function RenovarKey({ id }: PermissionsProp) {

   const item = items.find((item) => item.id === id);

   return (
      <>
         <Dialog.Root>
            <Dialog.Trigger asChild>
               <Button title="Renovar" className="bg-transparent border border-gray-500 hover:bg-red-500/40 cursor-pointer p-3">
               <ArrowsClockwise className="w-5 h-5" />
               </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
               <Dialog.Overlay className="fixed inset-0 bg-black/60" />
               <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl rounded-lg px-8 py-6">
                  <Dialog.Title className="text-xl pb-6">
                     Deseja renovar a chave <strong className="text-gray-200">{items ? item?.key : "Chave não encontrada"}</strong> ?
                  </Dialog.Title>
                  <div className="flex gap-4">
                     <Dialog.Close asChild>
                        <Button variant="white">Renovar</Button>
                     </Dialog.Close>
                     <Dialog.Close asChild>
                        <Button variant="gray">Cancelar</Button>
                     </Dialog.Close>
                  </div>
               </Dialog.Content>
            </Dialog.Portal>
         </Dialog.Root>
      </>
   )
}