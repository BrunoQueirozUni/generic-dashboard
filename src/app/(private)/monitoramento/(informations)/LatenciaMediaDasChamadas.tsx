"use client"

import { Card, CardTitle } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const mediumData = [
   { date: "08:00", calls: 200 },
   { date: "09:00", calls: 150 },
   { date: "10:00", calls: 160 },
   { date: "11:00", calls: 320 },
   { date: "12:00", calls: 100 },
   { date: "13:00", calls: 80  },
   { date: "14:00", calls: 200 },
   { date: "15:00", calls: 130 },
   { date: "16:00", calls: 177 },
   { date: "17:00", calls: 45  },
   { date: "18:00", calls: 125 },
   { date: "19:00", calls: 111 },
   { date: "20:00", calls: 200 },
]

export function LatenciaMediaDasChamdas() {
   return (
      <>
         <Card className="px-6">
            <CardTitle className="py-6 px-0">Latência Média das Chamdas</CardTitle>
            <ResponsiveContainer width="100%" height={300}>
               <LineChart data={mediumData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="calls" stroke="#5DDB" />
               </LineChart>
            </ResponsiveContainer>
         </Card>
      </>
   )
}