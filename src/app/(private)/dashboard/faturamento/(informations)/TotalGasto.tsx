"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
   { month: "Jan", gasto: 4000, },
   { month: "Fev", gasto: 3000, },
   { month: "Mar", gasto: 2000, },
   { month: "abr", gasto: 2780, },
   { month: "mai", gasto: 1890, },
   { month: "jun", gasto: 2390, },
   { month: "jul", gasto: 3490, },
   { month: "ago", gasto: 2490, },
   { month: "set", gasto: 8490, },
   { month: "out", gasto: 7490, },
   { month: "nov", gasto: 6490, },
   { month: "dez", gasto: 1490, },
]


export function TotalGasto() {
   return (
      <>
         <Card className="flex-1">
            <CardTitle>Total de Gasto</CardTitle>
            <CardContent>
               <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={data}>
                     <XAxis dataKey="month" stroke="#FFFF" />
                     <YAxis stroke="#FFFF" />
                     <Tooltip />
                     <Bar dataKey="gasto" fill="#8884d8" />
                  </BarChart>
               </ResponsiveContainer>
            </CardContent>
         </Card>
      </>
   )
}