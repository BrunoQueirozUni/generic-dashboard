"use client"

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { DatePickerWithRange } from "@/components/ui/date-range-picker";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Componente alert
import { useAlert } from "@/components/Alert";

export function ExportacaoDeLogsDasChamadas() {

   const { showAlert } = useAlert();

   const [format, setFormat] = useState("csv")
   const [dateRange, setDateRange] = useState<DateRange | undefined>(undefined);


   const handleExport = () => {
      if (!dateRange?.from || !dateRange?.to) {
         console.error("Erro: O intervalo de datas não foi selecionado corretamente.");
         return;
      }
   
      console.log(`Exportando logs das chamadas em formato ${format}`)
      console.log(`Período: de ${dateRange.from.toISOString()} até ${dateRange.to.toISOString()}`)
   
      // Simulação de download
      const element = document.createElement("a")
      const file = new Blob([JSON.stringify({ message: "Dados simulados dos logs" })], { type: "text/plain" })
      element.href = URL.createObjectURL(file)
      element.download = `api_logs.${format}`
      document.body.appendChild(element)
      element.click()

      showAlert("download")
   }
   
   return (
      <>
         <Card>
            <CardTitle>Exportação de Logs das Chamadas</CardTitle>
            <CardContent>
               <div className="flex gap-4">
                  <div>
                     <label className="block text-sm font-medium mb-2">Período</label>
                     <DatePickerWithRange date={dateRange} setDate={setDateRange} />
                  </div>
                  <div>
                     <label className="block text-sm mb-2">Formato</label>
                     <Select value={format} onValueChange={setFormat}>
                        <SelectTrigger className="w-[180px]">
                           <SelectValue placeholder="Selecione o formato" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="csv">CSV</SelectItem>
                           <SelectItem value="json">JSON</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
               </div>
               <Button onClick={handleExport} variant="white" className="mt-6">Exportar Logs</Button>
            </CardContent>
         </Card>
      </>
   )
}