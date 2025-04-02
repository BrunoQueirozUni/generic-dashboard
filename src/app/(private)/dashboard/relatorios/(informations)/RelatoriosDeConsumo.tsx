"use client"

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import * as Tabs from "@radix-ui/react-tabs"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const TabsDesign = {
  tabsDesign: "flex items-center justify-center gap-3 hover:bg-gray-950 data-[state=active]:bg-gray-950 cursor-pointer py-1 rounded-sm flex-1"
}

// Dados simulados para os gráficos
const dailyData = [
  { date: "01/07", calls: 1200, errors: 20, latency: 120 },
  { date: "02/07", calls: 1400, errors: 15, latency: 115 },
  { date: "03/07", calls: 1100, errors: 25, latency: 130 },
  { date: "04/07", calls: 1700, errors: 30, latency: 125 },
  { date: "05/07", calls: 1900, errors: 22, latency: 110 },
  { date: "06/07", calls: 2100, errors: 18, latency: 105 },
  { date: "07/07", calls: 1800, errors: 16, latency: 100 },
  { date: "08/07", calls: 2000, errors: 20, latency: 115 },
  { date: "09/07", calls: 2200, errors: 25, latency: 120 },
  { date: "10/07", calls: 1950, errors: 15, latency: 110 },
  { date: "11/07", calls: 2300, errors: 30, latency: 125 },
  { date: "12/07", calls: 2100, errors: 22, latency: 115 },
  { date: "13/07", calls: 2400, errors: 18, latency: 105 },
  { date: "14/07", calls: 2200, errors: 16, latency: 100 },
]

const endpointData = [
  { name: "Usuários", calls: 12500, percentage: 35 },
  { name: "Produtos", calls: 8500, percentage: 24 },
  { name: "Pedidos", calls: 6200, percentage: 17 },
  { name: "Autenticação", calls: 5100, percentage: 14 },
  { name: "Pagamentos", calls: 3700, percentage: 10 },
]

export function RelatoriosDeConsumo() {
  return (
    <Card>
      <CardTitle className="pb-0">Relatórios de Consumo</CardTitle>
      <CardDescription>Dados detalhados do uso da API por período</CardDescription>
      <CardContent className="pt-6">
        <Tabs.Root defaultValue="volume">
          <Tabs.List className="w-full bg-gray-700/50 rounded-sm py-1 px-1 flex gap-2">
            <Tabs.Trigger className={TabsDesign.tabsDesign} value="volume">Volume de Chamadas</Tabs.Trigger>
            <Tabs.Trigger className={TabsDesign.tabsDesign} value="endpoints">Uso por Endpoint</Tabs.Trigger>
            <Tabs.Trigger className={TabsDesign.tabsDesign} value="errors">Taxa de Erros</Tabs.Trigger>
            <Tabs.Trigger className={TabsDesign.tabsDesign} value="latency">Latência</Tabs.Trigger>
          </Tabs.List>

          {/* Volume de Chamadas */}
          <Tabs.Content value="volume" className="pt-4">
            <ChartContainer
              config={{
                calls: {
                  label: "Chamadas da API",
                },
              }}
              className="h-[400px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dailyData}>
                  <CartesianGrid strokeDasharray="1 4" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="calls"
                    fillOpacity={0.2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <MetricCard title="Total de Chamadas" value="32,450" change="+12.5%" trend="up" />
              <MetricCard title="Média Diária" value="2,318" change="+8.3%" trend="up" />
              <MetricCard title="Pico de Uso" value="3,142" subtitle="11/07/2023" />
              <MetricCard title="Crescimento" value="12.5%" subtitle="vs. mês anterior" trend="up" />
            </div>
          </Tabs.Content>

          {/* Uso por Endpoints */}
          <Tabs.Content value="endpoints" className="pt-4">
            <div className="grid md:grid-cols-2 gap-6">
              <ChartContainer
                config={{
                  calls: {
                    label: "Chamadas da API",
                  },
                }}
                className="h-[400px]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={endpointData}>
                    <CartesianGrid strokeDasharray="1 4" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="calls" fill="#0198D7" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>

              <div>
                <h3 className="text-lg font-medium mb-4">Distribuição por Endpoint</h3>
                <div className="space-y-4">
                  {
                    endpointData.map((endpoint) => (
                      <div key={endpoint.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span>{endpoint.name}</span>
                          <span className="font-medium">{endpoint.percentage}%</span>
                        </div>
                        <div className="w-full rounded-full h-2.5 dark:bg-gray-700">
                          <div
                            className="bg-blue-500 h-2.5 rounded-full"
                            style={{ width: `${endpoint.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </Tabs.Content>

          {/* Taxa de Erros */}
          <Tabs.Content value="errors" className="pt-4">
            <ChartContainer
              config={{
                errors: {
                  label: "Erros",
                  color: "hsl(var(--destructive))",
                },
                calls: {
                  label: "Total de Chamadas",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[400px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyData}>
                  <CartesianGrid strokeDasharray="1 4" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="calls" stroke="var(--color-calls)" />
                  <Line yAxisId="right" type="monotone" dataKey="errors" stroke="var(--color-errors)" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <MetricCard title="Total de Erros" value="258" change="-5.2%" trend="down" />
              <MetricCard title="Taxa de Erro" value="0.8%" change="-0.3%" trend="down" />
              <MetricCard title="Erros 4xx" value="187" subtitle="72.5% do total" />
              <MetricCard title="Erros 5xx" value="71" subtitle="27.5% do total" />
            </div>
          </Tabs.Content>

          {/* Latência*/}
          <Tabs.Content value="latency" className="pt-4">
            <ChartContainer
              config={{
                latency: {
                  label: "Latência (ms)",
                  color: "hsl(var(--chart-3))",
                },
              }}
              className="h-[400px] w-full"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyData}>
                  <CartesianGrid strokeDasharray="1 4" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Line type="monotone" dataKey="latency" stroke="#ccc9" />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <MetricCard title="Latência Média" value="115ms" change="-8ms" trend="down" />
              <MetricCard title="Latência p95" value="142ms" change="-12ms" trend="down" />
              <MetricCard title="Latência p99" value="185ms" change="-15ms" trend="down" />
              <MetricCard title="Tempo de Resposta" value="98.2%" subtitle="SLA: 99.9%" trend="down" />
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </CardContent>
    </Card>
  )
}

// Componente para o cartão de métrica
interface MetricCardProps {
  title: string
  value: string
  subtitle?: string
  change?: string
  trend?: "up" | "down"
}

function MetricCard({ title, value, subtitle, change, trend }: MetricCardProps) {
  return (
    <div className="bg-card rounded-lg border border-gray-700 p-4">
      <h4 className="text-sm">{title}</h4>
      <div className="mt-1 flex items-baseline">
        <p className="text-2xl font-semibold">{value}</p>
        {change && <p className={`ml-2 text-sm ${trend === "up" ? "text-green-500" : "text-red-500"}`}>{change}</p>}
      </div>
      {subtitle && <p className="text-xs mt-1">{subtitle}</p>}
    </div>
  )
}

