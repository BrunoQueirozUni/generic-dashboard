"use client"

import * as Tabs from "@radix-ui/react-tabs";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"


const dailyData = [
   { date: "01/07", calls: 1000 },
   { date: "02/07", calls: 1200 },
   { date: "03/07", calls: 800 },
   { date: "04/07", calls: 1500 },
   { date: "05/07", calls: 1800 },
   { date: "06/07", calls: 2000 },
   { date: "07/07", calls: 1700 },
]

const weeklyData = [
   { week: "Semana 1", calls: 8000 },
   { week: "Semana 2", calls: 9500 },
   { week: "Semana 3", calls: 11000 },
   { week: "Semana 4", calls: 10500 },
]

const monthlyData = [
   { month: "Jan", calls: 30000 },
   { month: "Fev", calls: 35000 },
   { month: "Mar", calls: 40000 },
   { month: "Abr", calls: 38000 },
   { month: "Mai", calls: 45000 },
   { month: "Jun", calls: 50000 },
]

export function GraficoDeConsumo() {
   return (
      <>
         <Card className="px-6">
            <CardTitle className="py-6 px-0">Gráficos de Consumo</CardTitle>
            <CardContent className="mb-6">
               <Tabs.Root defaultValue="daily">
                  <Tabs.List className="mb-6 flex">
                     <div className="bg-gray-950 rounded-md py-2 px-2 flex gap-2">
                        <Tabs.Trigger className="hover:bg-gray-800 data-[state=active]:bg-gray-800 cursor-pointer px-3 py-2 rounded-md" value="daily">Diário</Tabs.Trigger>
                        <Tabs.Trigger className="hover:bg-gray-800 data-[state=active]:bg-gray-800 cursor-pointer px-3 py-2 rounded-md" value="weekly">Semanal</Tabs.Trigger>
                        <Tabs.Trigger className="hover:bg-gray-800 data-[state=active]:bg-gray-800 cursor-pointer px-3 py-2 rounded-md" value="monthly">Mensal</Tabs.Trigger>
                     </div>
                  </Tabs.List>
                  <Tabs.Content value="daily">
                     <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={dailyData}>
                           <XAxis dataKey="date" />
                           <YAxis />
                           <Tooltip />
                           <Line type="monotone" dataKey="calls" stroke="#8884d8" />
                        </LineChart>
                     </ResponsiveContainer>
                  </Tabs.Content>
                  <Tabs.Content value="weekly">
                     <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={weeklyData}>
                           <XAxis dataKey="week" />
                           <YAxis />
                           <Tooltip />
                           <Line type="monotone" dataKey="calls" stroke="#82ca9d" />
                        </LineChart>
                     </ResponsiveContainer>
                  </Tabs.Content>
                  <Tabs.Content value="monthly">
                     <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={monthlyData}>
                           <XAxis dataKey="month" />
                           <YAxis />
                           <Tooltip />
                           <Line type="monotone" dataKey="calls" stroke="#ffc658" />
                        </LineChart>
                     </ResponsiveContainer>
                  </Tabs.Content>
               </Tabs.Root>
            </CardContent>
         </Card>
      </>
   )
}