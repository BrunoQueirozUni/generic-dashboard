"use client"

import { Button } from "@/components/ui/button";
import { DownloadSimple } from "@phosphor-icons/react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const faturas = [
   { data: "25/12/2024", valor: "3000", status: "pago" },
   { data: "31/02/2025", valor: "1241", status: "pago" },
   { data: "04/03/2025", valor: "4232", status: "pendente" },
   { data: "05/12/2050", valor: "4343", status: "pendente" },
]

export function Fatura() {
   return (
      <>
         <Card>
            <CardTitle>Faturas</CardTitle>
            <CardContent>
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead>Data</TableHead>
                        <TableHead>Valor</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Ação</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {faturas.map((faturas, index) => (
                        <TableRow key={index}>
                           <TableCell>{faturas.data}</TableCell>
                           <TableCell>{faturas.valor}</TableCell>
                           <TableCell>{faturas.status}</TableCell>
                           <TableCell>
                              <Button variant="gray">
                                 <DownloadSimple size={32} />
                                 PDF
                              </Button>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </CardContent>
         </Card>
      </>
   )
}