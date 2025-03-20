"use client"

import { Trash } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { AdicionarMetodoDePagamento } from "./components/AdicionarMetodoDePagamento";

// Componente alert
import { useAlert } from "@/components/Alert";

const pix = [
   { id: 1, title: "johnwarhammer@imprium.com.mw" },
   { id: 2, title: "32rhio24HIF3iojrsdf43" },
   { id: 3, title: "554399785399" }
]

const cartoes = [
   { id: 1, title: "1234 5678 9876 5432" },
   { id: 2, title: "4321 8765 5432 1098" },
   { id: 3, title: "5678 1234 1098 7654" }
]

const cryptos = [
   { id: 1, title: "0x0f4f2ac550a1b4e2280d04c21cea7ebd822934b5" },
   { id: 2, title: "0x0f4f2ac550a1b4e2280d04c21cea7ebd822934b5" },
   { id: 3, title: "0x0f4f2ac550a1b4e2280d04c21cea7ebd822934b5" }
]

export function MetodoDePagamento() {

   const { showAlert } = useAlert();

   return (
      <>
         <Card>
            <CardTitle>Método de Pagamento</CardTitle>
            <CardContent className="flex gap-4 pb-6">
               <div className="flex flex-1 flex-col px-3 border-r border-gray-800">
                  <h2 className="text-center text-xl pb-5">Chaves PIXs</h2>
                  {pix.map((item) => (
                     <div key={item.id} className="flex gap-3 items-center">
                        <div className="flex-1">
                           <p>{item.title}</p>
                        </div>
                        <div className="flex justify-end">
                           <Button onClick={() => showAlert("itemRemoved")} title="Remover" className="bg-transparent border border-gray-600 hover:bg-red-500/40 cursor-pointer w-5 h-8 mb-2">
                              <Trash className="w-2 h-2" />
                           </Button>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="flex flex-1 flex-col px-3">
                  <h2 className="text-center text-xl pb-5">Cartões</h2>
                  {cartoes.map((item) => (
                     <div key={item.id} className="flex gap-3 items-center">
                        <div className="flex-1">
                           <p>{item.title}</p>
                        </div>
                        <div className="flex justify-end">
                           <Button onClick={() => showAlert("itemRemoved")} title="Remover" className="bg-transparent border border-gray-600 hover:bg-red-500/40 cursor-pointer w-5 h-8 mb-2">
                              <Trash className="w-2 h-2" />
                           </Button>
                        </div>
                     </div>
                  ))}
               </div>
               <div className="flex flex-1 flex-col px-3 border-l border-gray-800">
                  <h2 className="text-center text-xl pb-5">Chaves Cryptos</h2>
                  {cryptos.map((item) => (
                     <div key={item.id} className="flex gap-3 items-center">
                        <div className="flex-1">
                           <p>{item.title}</p>
                        </div>
                        <div className="flex justify-end">
                           <Button onClick={() => showAlert("itemRemoved")} title="Remover" className="bg-transparent border border-gray-600 hover:bg-red-500/40 cursor-pointer w-5 h-8 mb-2">
                              <Trash className="w-2 h-2" />
                           </Button>
                        </div>
                     </div>
                  ))}
               </div>
            </CardContent>
            <div>
               <AdicionarMetodoDePagamento />
            </div>
         </Card>
      </>
   )
}