"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { subDays, subMonths } from "date-fns"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, Download, RefreshCw } from "lucide-react"
import { DatePickerWithRange } from "@/components/ui/date-range-picker"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function RelatoriosFiltros() {
   const today = new Date()
   const [dateRange, setDateRange] = useState({
      from: subDays(today, 30),
      to: today,
   })
   const [apiEndpoint, setApiEndpoint] = useState("all")
   const [groupBy, setGroupBy] = useState("day")

   const predefinedRanges = [
      { label: "Últimos 7 dias", range: { from: subDays(today, 7), to: today } },
      { label: "Últimos 30 dias", range: { from: subDays(today, 30), to: today } },
      { label: "Últimos 3 meses", range: { from: subMonths(today, 3), to: today } },
      { label: "Últimos 6 meses", range: { from: subMonths(today, 6), to: today } },
      { label: "Este ano", range: { from: new Date(today.getFullYear(), 0, 1), to: today } },
   ]

   return (
      <Card className="pt-4">
         <CardContent>
            <div className="flex gap-4 items-end">
               <div className="space-y-2 w-1/2 flex-1">
                  <Label>Período</Label>
                  <div className="flex gap-2 mt-1">
                     <DatePickerWithRange date={dateRange} setDate={(date) => setDateRange({ from: date?.from || today, to: date?.to || today })} />
                     <Popover>
                        <PopoverTrigger asChild>
                           <Button variant="gray" size="icon">
                              <CalendarIcon className="h-4 w-4" />
                           </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0" align="start">
                           <div className="p-2 space-y-1">
                              {predefinedRanges.map((item) => (
                                 <Button
                                    key={item.label}
                                    variant="popover"
                                    className="w-full justify-start"
                                    onClick={() => setDateRange(item.range)}
                                 >
                                    {item.label}
                                 </Button>
                              ))}
                           </div>
                        </PopoverContent>
                     </Popover>
                  </div>
               </div>

               <div className="w-1/2 flex items-end justify-end gap-2">
                  <div className="space-y-2 flex-1">
                     <Label>Endpoint</Label>
                     <Select value={apiEndpoint} onValueChange={setApiEndpoint}>
                        <SelectTrigger className="w-full mt-1">
                           <SelectValue placeholder="Todos os endpoints" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="all">Todos os endpoints</SelectItem>
                           <SelectItem value="users">Usuários</SelectItem>
                           <SelectItem value="products">Produtos</SelectItem>
                           <SelectItem value="orders">Pedidos</SelectItem>
                           <SelectItem value="auth">Autenticação</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>

                  <div className="space-y-2 flex-1">
                     <Label>Agrupar por</Label>
                     <Select value={groupBy} onValueChange={setGroupBy}>
                        <SelectTrigger className="w-full mt-1">
                           <SelectValue placeholder="Dia" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="hour">Hora</SelectItem>
                           <SelectItem value="day">Dia</SelectItem>
                           <SelectItem value="week">Semana</SelectItem>
                           <SelectItem value="month">Mês</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>

                  <div className="flex gap-2">
                     <Button variant="gray" size="icon">
                        <RefreshCw className="h-4 w-4" />
                     </Button>
                     <Button variant="gray" size="icon">
                        <Download className="h-4 w-4" />
                     </Button>
                  </div>
               </div>
            </div>
         </CardContent>
      </Card>
   )
}

