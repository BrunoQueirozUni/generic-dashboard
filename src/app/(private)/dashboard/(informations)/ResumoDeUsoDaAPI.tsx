"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Seg", Diário: 4000, Semanal: 2400, Mensal: 2400 },
  { name: "Ter", Diário: 3000, Semanal: 1398, Mensal: 2210 },
  { name: "Qua", Diário: 2000, Semanal: 9800, Mensal: 2290 },
  { name: "Qui", Diário: 2780, Semanal: 3908, Mensal: 2000 },
  { name: "Sex", Diário: 1890, Semanal: 4800, Mensal: 2181 },
  { name: "Sáb", Diário: 2390, Semanal: 3800, Mensal: 2500 },
  { name: "Dom", Diário: 3490, Semanal: 4300, Mensal: 2100 },
]

export function ResumoDeUsoDaAPI() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Resumo do Uso da API</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#FFFF" />
            <YAxis stroke="#FFFF" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Diário" fill="#8884d8" />
            <Bar dataKey="Semanal" fill="#82ca9d" />
            <Bar dataKey="Mensal" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

