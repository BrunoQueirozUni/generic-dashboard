"use client"

import { Button } from "@/components/ui/button";
import { DownloadSimple } from "@phosphor-icons/react";
import { Card, CardContent } from "@/components/ui/card";

const faturas = [
   { data: "25/12/2024", valor: "3000", status: "pago"     },
   { data: "31/02/2025", valor: "1241", status: "pago"     },
   { data: "04/03/2025", valor: "4232", status: "pendente" },
   { data: "05/12/2050", valor: "4343", status: "pendente" },
]

export function Fatura() {
   return (
      <>
         <Card>
            <h1 className="text-2xl py-4 px-6">Faturas</h1>
            <div className=" px-6">
               <CardContent className="">
                  <table className="w-full border-collapse ">
                     <thead className="text-gray-400">
                        <tr className="hover:bg-gray-800/70 transition duration-100">
                           <th className="text-left px-4 py-3">Data</th>
                           <th className="text-left px-4 py-3">Valor</th>
                           <th className="text-left px-4 py-3">Status</th>
                           <th className="text-left px-4 py-3">Ação</th>
                        </tr>
                     </thead>
                     <tbody>
                        {faturas.map((faturas, index) => (
                           <tr key={index} className="border-t border-gray-800 hover:bg-gray-800/70 transition duration-100">
                              <td className="px-4 py-3">{faturas.data}</td>
                              <td className="px-4 py-3">{faturas.valor}</td>
                              <td className="px-4 py-3">{faturas.status}</td>
                              <td className="px-4 py-3">
                                 <Button variant="gray">
                                    <DownloadSimple size={32} />
                                    PDF
                                 </Button>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </CardContent>
            </div>
         </Card>
      </>
   )
}