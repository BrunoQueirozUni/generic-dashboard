"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import * as Tabs from "@radix-ui/react-tabs"
import {
   BarChart,
   Bar,
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Legend,
   ResponsiveContainer,
   ComposedChart,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const TabsDesign = {
   tabsDesign: "flex items-center justify-center gap-3 hover:bg-gray-950 data-[state=active]:bg-gray-950 cursor-pointer py-1 rounded-sm flex-1"
}

// Dados simulados para os gráficos
const monthlyData = [
   { month: "Jan", usage: 28500, billing: 1425 },
   { month: "Fev", usage: 31200, billing: 1560 },
   { month: "Mar", usage: 29800, billing: 1490 },
   { month: "Abr", usage: 32500, billing: 1625 },
   { month: "Mai", usage: 35100, billing: 1755 },
   { month: "Jun", usage: 38200, billing: 1910 },
   { month: "Jul", usage: 36500, billing: 1825 },
]

const costBreakdown = [
   { name: "Chamadas de API", value: 65, cost: 1825.00 },
   { name: "Armazenamento", value: 15, cost: 1186.25 },
   { name: "Transferência de Dados", value: 12, cost: 273.75 },
   { name: "Recursos Premium", value: 8, cost: 146.00 },
]

const efficiencyData = [
   { month: "Jan", costPerCall: 0.05, callsPerDollar: 20.0 },
   { month: "Fev", costPerCall: 0.05, callsPerDollar: 20.5 },
   { month: "Mar", costPerCall: 0.08, callsPerDollar: 20.7 },
   { month: "Abr", costPerCall: 0.07, callsPerDollar: 20.0 },
   { month: "Mai", costPerCall: 0.06, callsPerDollar: 20.2 },
   { month: "Jun", costPerCall: 0.05, callsPerDollar: 20.0 },
   { month: "Jul", costPerCall: 0.05, callsPerDollar: 20.0 },
]

export function FerramentaVsUso() {
   return (
      <Card>
         <CardTitle className="pb-0">Faturamento vs Uso</CardTitle>
         <CardDescription>Comparação entre consumo e gastos</CardDescription>
         <CardContent className="pt-6">
            <Tabs.Root defaultValue="comparison">
               <Tabs.List className="w-full bg-gray-700/50 rounded-sm py-1 px-1 flex gap-2">
                  <Tabs.Trigger className={TabsDesign.tabsDesign} value="comparison">Comparação</Tabs.Trigger>
                  <Tabs.Trigger className={TabsDesign.tabsDesign} value="breakdown">Detalhamento de Custos</Tabs.Trigger>
                  <Tabs.Trigger className={TabsDesign.tabsDesign} value="efficiency">Eficiência de Custos</Tabs.Trigger>
               </Tabs.List>

               {/* Comparação */}
               <Tabs.Content value="comparison" className="pt-4">
                  <ChartContainer
                     config={{
                        usage: {
                           label: "Chamadas da API",
                           color: "hsl(var(--chart-1))",
                        },
                        billing: {
                           label: "Faturamento (R$)",
                           color: "white",
                        },
                     }}
                     className="h-[400px]"
                  >
                     <ResponsiveContainer width="100%" height="100%">
                        <ComposedChart data={monthlyData}>
                           <CartesianGrid strokeDasharray="1 4" />
                           <XAxis dataKey="month" />
                           <YAxis yAxisId="left" />
                           <YAxis yAxisId="right" orientation="right" />
                           <ChartTooltip content={<ChartTooltipContent />} />
                           <Legend />
                           <Bar yAxisId="left" dataKey="usage" fill="var(--color-usage)" />
                           <Line yAxisId="right" type="monotone" dataKey="billing" stroke="var(--color-billing)" />
                        </ComposedChart>
                     </ResponsiveContainer>
                  </ChartContainer>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                     <MetricCard title="Total de Chamadas" value="231,800" subtitle="Últimos 7 meses" />
                     <MetricCard title="Faturamento Total" value="R$ 11,590" subtitle="Últimos 7 meses" />
                     <MetricCard title="Custo Médio" value="R$ 0.05" subtitle="Por chamada" />
                     <MetricCard title="Crescimento" value="28.1%" subtitle="vs. período anterior" trend="up" />
                  </div>
               </Tabs.Content>

               {/* Detalhamento de Custos */}
               <Tabs.Content value="breakdown" className="pt-4">
                  <div>
                     <div className="grid md:grid-cols-2 gap-6">
                        <ChartContainer
                           config={{
                              value: {
                                 label: "Percentual",
                                 color: "hsl(var(--chart-1))",
                              },
                           }}
                           className="h-[400px] "
                        >
                           <ResponsiveContainer width="100%" height="100%">
                              <BarChart data={costBreakdown} layout="vertical">
                                 <CartesianGrid strokeDasharray="1 4" />
                                 <XAxis type="number" />
                                 <YAxis dataKey="name" type="category" />
                                 <ChartTooltip content={<ChartTooltipContent />} />
                                 <Legend />
                                 <Bar dataKey="value" fill="var(--color-value)" />
                              </BarChart>
                           </ResponsiveContainer>
                        </ChartContainer>

                        <div>
                           <h3 className="text-lg font-medium mb-4">Detalhamento de Custos</h3>
                           <div className="space-y-4">
                              {costBreakdown.map((item) => (
                                 <div key={item.name} className="space-y-2">
                                    <div className="flex justify-between">
                                       <span className="text-lg">{item.name}:</span>
                                       <span className="font-medium">{item.value}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                       <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${item.value}%` }}></div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className="flex mt-8 justify-between gap-3">
                        <div className="border border-gray-700 p-3 rounded-md">
                           <span className="font-medium">Custo Total Mensal</span>
                           <p className="text-gray-400 pt-1">R$ 1,825.00</p>
                        </div>
                        {
                           costBreakdown.map((item) => (
                              <div key={item.cost} className="flex-1 border border-gray-700 p-3 rounded-md">
                                 <span className="font-medium">Custo Total Mensal</span>
                                 <p className="text-gray-400 pt-1">{item.cost.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
                              </div>
                           ))
                        }
                     </div>
                  </div>
               </Tabs.Content>

               <Tabs.Content value="efficiency" className="pt-4">
                  <ChartContainer
                     config={{
                        costPerCall: {
                           label: "Custo por Chamada (R$)",
                           color: "hsl(var(--chart-5))",
                        },
                        callsPerDollar: {
                           label: "Chamadas por Real",
                           color: "hsl(var(--chart-2))",
                        },
                     }}
                     className="h-[400px]"
                  >
                     <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={efficiencyData}>
                           <CartesianGrid strokeDasharray="1 4" />
                           <XAxis dataKey="month" />
                           <YAxis yAxisId="left" />
                           <YAxis yAxisId="right" orientation="right" />
                           <ChartTooltip content={<ChartTooltipContent />} />
                           <Legend />
                           <Line yAxisId="left" type="monotone" dataKey="costPerCall" stroke="var(--color-costPerCall)" />
                           <Line yAxisId="right" type="monotone" dataKey="callsPerDollar" stroke="var(--color-callsPerDollar)" />
                        </LineChart>
                     </ResponsiveContainer>
                  </ChartContainer>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                     <MetricCard title="Custo por Chamada" value="R$ 0.05" change="0%" trend="neutral" />
                     <MetricCard title="Chamadas por Real" value="20" change="0%" trend="neutral" />
                     <MetricCard title="Economia Potencial" value="R$ 273.75" subtitle="15% do total" />
                     <MetricCard title="ROI da API" value="312%" subtitle="Retorno sobre investimento" trend="up" />
                  </div>
               </Tabs.Content>
            </Tabs.Root>
         </CardContent>
      </Card>
   )
}

interface MetricCardProps {
   title: string
   value: string
   subtitle?: string
   change?: string
   trend?: "up" | "down" | "neutral"
}

function MetricCard({ title, value, subtitle, change, trend }: MetricCardProps) {
   return (
      <div className="bg-card rounded-lg border border-gray-700 p-4">
         <h4 className="text-sm">{title}</h4>
         <div className="mt-1 flex items-baseline">
            <p className="text-2xl font-semibold">{value}</p>
            {change && (
               <p
                  className={`ml-2 text-sm ${trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-gray-500"
                     }`}
               >
                  {change}
               </p>
            )}
         </div>
         {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
      </div>
   )
}

