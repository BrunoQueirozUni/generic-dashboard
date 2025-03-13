import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { items } from "../GerenciarChaves";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";


interface PermissionsProp {
   id: Number;
}

const permissions = [
   { id: "read_users", label: "Ler usuários" },
   { id: "write_users", label: "Escrever usuários" },
   { id: "read_products", label: "Ler produtos" },
   { id: "write_products", label: "Escrever produtos" },
   { id: "read_orders", label: "Ler pedidos" },
   { id: "write_orders", label: "Escrever pedidos" },
]

export function Permissions({ id }: PermissionsProp) {

   const item = items.find((item) => item.id === id);

   return (
      <>
         <Dialog.Root>
            <Dialog.Trigger asChild>
               <Button className="bg-transparent border border-gray-500 hover:bg-gray-800/70 cursor-pointer">Permissões</Button>
            </Dialog.Trigger>
            <Dialog.Portal>
               <Dialog.Overlay className="fixed inset-0 bg-black/60" />
               <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-300 border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl rounded-lg px-8 py-6">
                  <Dialog.Title className="text-xl">Permissões da Chave <strong className="text-gray-200">{items ? item?.key : "Chave não encontrada"}</strong></Dialog.Title>
                  <div className="grid gap-4 py-6 sm:grid-cols-2">
                     {
                        permissions.map((permission) => (
                           <div key={permission.id} className="flex items-center gap-2">
                              <Checkbox id={permission.id} className="border-white border p-1.5 data-[state=checked]:bg-white data-[state=checked]:text-primary-foreground" />
                              <Label htmlFor={permission.id}>{permission.label}</Label>
                           </div>
                        ))
                     }
                  </div>
                  <div className="flex gap-4">
                     <Dialog.Close asChild>
                        <Button variant="white">Salvar</Button>
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