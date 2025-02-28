import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
   { id: 1, date: "02/02/2025", value: "R$ 200,00",  status: "pago",     cor: "bg-green-500"  },
   { id: 2, date: "25/01/2025", value: "R$ 4500,00", status: "pendente", cor: "bg-orange-500" },
   { id: 3, date: "23/01/2025", value: "R$ 240,00",  status: "pago",     cor: "bg-green-500"  },
   { id: 4, date: "22/01/2025", value: "R$ 3240,00", status: "pago",     cor: "bg-green-500"  },
   { id: 5, date: "10/01/2025", value: "R$ 3015,00", status: "pendente", cor: "bg-orange-500" },
   { id: 6, date: "05/01/2025", value: "R$ 500,00",  status: "pago",     cor: "bg-green-500"  },
]

export function HistoricoDePagamentos() {
   return (
      <>
         <Card className="flex-1">
            <h1 className="text-2xl py-4 px-6">Histórico de Pagamentos</h1>
            <div className="overflow-y-auto max-h-[340px] px-6">
               {
                  items.map((item) => (
                     <div key={item.id} className="flex flex-col justify-center">
                        <div className="flex justify-between items-center py-2">
                           <CardHeader>
                              <CardTitle className="text-base font-medium">{item.date}</CardTitle>
                              <span className="text-gray-400">{item.value}</span>
                           </CardHeader>
                           <CardContent className="">
                              <Badge variant="secondary" className={`px-4 py-1 ${item.cor}`}>
                                 {item.status}
                              </Badge>
                           </CardContent>
                        </div>
                        <hr className="border border-gray-800" />
                     </div>
                  ))
               }
            </div>
         </Card>
      </>
   )
}