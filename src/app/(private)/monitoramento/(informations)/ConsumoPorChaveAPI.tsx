"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
   { chave: "Chave 1",  chamadas: 3000 },
   { chave: "Chave 2",  chamadas: 1224 },
   { chave: "Chave 3",  chamadas: 4563 },
   { chave: "Chave 4",  chamadas: 5000 },
   { chave: "Chave 5",  chamadas: 4523 },
   { chave: "Chave 6",  chamadas: 3000 },
   { chave: "Chave 7",  chamadas: 1100 },
   { chave: "Chave 8",  chamadas: 2200 },
   { chave: "Chave 9",  chamadas: 4300 },
   { chave: "Chave 10", chamadas: 2222 },
   { chave: "Chave 11", chamadas: 4500 },
   { chave: "Chave 12", chamadas: 2600 },
]

export function ConsumoPorChaveAPI() {
   return (
      <>
         <Card>
            <CardTitle>Consumo por API Key</CardTitle>
            <CardContent>
               <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={data}>
                     <XAxis dataKey="chave" stroke="#FFFF" />
                     <YAxis stroke="#FFFF" />
                     <Tooltip />
                     <Bar dataKey="chamadas" fill="#8884d8" />
                  </BarChart>
               </ResponsiveContainer>
            </CardContent>
         </Card>
      </>
   )
}