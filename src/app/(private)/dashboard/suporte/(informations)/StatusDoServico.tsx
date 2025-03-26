import * as Progress from "@radix-ui/react-progress";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceStatusItem {
   label: string
   status: "operational" | "degraded" | "outage" | "maintenance"
   uptime: number
}

interface Incident {
   id: number
   date: string
   title: string
   status: "resolved" | "monitoring" | "identified" | "investigating"
   description: string
}

const api: ServiceStatusItem[] = [
   { label: "API Principal", status: "operational", uptime: 87645 },
   { label: "Dashboard", status: "operational", uptime: 99540 },
   { label: "Monitoramento", status: "operational", uptime: 100000 },
   { label: "Consulta de Dados", status: "degraded", uptime: 56435 },
   { label: "Gerenciar APIs", status: "maintenance", uptime: 0 },
]

const incidents: Incident[] = [
   {
      id: 1,
      date: "2023-07-15",
      title: "Lentidão no Banco de Dados",
      status: "monitoring",
      description: "Estamos monitorando a lentidão no banco de dados. A performance está melhorando gradualmente.",
   },
   {
      id: 2,
      date: "2023-07-10",
      title: "Indisponibilidade da API",
      status: "resolved",
      description: "A API ficou indisponível por 15 minutos devido a um problema no servidor. O problema foi resolvido.",
   },
]

export function StatusDoservico() {
   const monthLimit = 100000;
   const usage = (item: ServiceStatusItem) => (item.uptime / monthLimit) * 100;

   const getStatusBadge = (status: ServiceStatusItem["status"]) => {
      switch (status) {
         case "operational":
            return <Badge variant="default">Operacional</Badge>
         case "degraded":
            return <Badge variant="yellow">Degradado</Badge>
         case "outage":
            return <Badge variant="red">Indisponível</Badge>
         case "maintenance":
            return <Badge variant="blue">Manutenção</Badge>
      }
   }

   const getIncidentStatusBadge = (status: Incident["status"]) => {
      switch (status) {
         case "resolved":
            return <Badge variant="default">Resolvido</Badge>
         case "monitoring":
            return <Badge variant="purple">Monitorando</Badge>
         case "identified":
            return <Badge>Identificado</Badge>
         case "investigating":
            return <Badge variant="yellow">Investigando</Badge>
      }
   }

   return (
      <>
         <Card>
            <CardTitle className="px-0 pt-6 pb-1">Status do Serviço</CardTitle>
            <CardDescription>Verifique o status atual dos nossos serviços</CardDescription>
            <CardContent className="pt-8">
               <h1 className="text-xl pb-6">Status Atual</h1>
               <div>
                  {
                     api.map((item) => (
                        <div className="flex justify-between items-center py-1" key={item.label}>
                           <div className="w-[50%]">
                              <span>{item.label}</span>
                              <div className="flex gap-3">
                                 <Progress.Root
                                    className="relative h-[20px] overflow-hidden rounded-md mb-3 border border-gray-700 flex-1"
                                    value={usage(item)}
                                 >
                                    <Progress.Indicator
                                       className="ease-[cubic-bezier(0.65, 0, 0.35, 1)] size-full bg-blue-500 transition-transform duration-[660ms]"
                                       style={{ transform: `translateX(-${100 - usage(item)}%)` }}
                                    />
                                 </Progress.Root>
                                 <span className="text-sm text-gray-500 flex-1">{usage(item).toFixed(2)}%</span>
                              </div>
                           </div>
                           {getStatusBadge(item.status)}
                        </div>
                     ))
                  }
               </div>
               <h1 className="text-xl py-6">Incidentes Recentes</h1>
               <div>
                  {incidents.length > 0 ? (
                     <div className="space-y-4">
                        {incidents.map((incident) => (
                           <div key={incident.id} className="rounded-md border border-gray-700 p-4">
                              <div className="flex items-center justify-between">
                                 <div>
                                    <p className="font-medium">{incident.title}</p>
                                    <p className="text-sm text-gray-500">{incident.date}</p>
                                 </div>
                                 {getIncidentStatusBadge(incident.status)}
                              </div>
                              <p className="mt-2 text-sm">{incident.description}</p>
                           </div>
                        ))}
                     </div>
                  ) : (
                     <p className="text-sm text-muted-foreground">Nenhum incidente recente.</p>
                  )}
               </div>
            </CardContent>
         </Card>
      </>
   )
}