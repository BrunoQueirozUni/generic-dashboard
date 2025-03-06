import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const items = [
   { id: 1, title: "UsuáriosAPI",   value: "Ativa",   cor: "text-green-500", bg: "bg-green-500/20" },
   { id: 2, title: "ProdutosAPI",   value: "Ativa",   cor: "text-green-500", bg: "bg-green-500/20" },
   { id: 3, title: "VendasAPI",     value: "Inativa", cor: "text-gray-500",  bg: "bg-gray-500/20" },
   { id: 4, title: "EstoqueAPI",    value: "Ativa",   cor: "text-green-500", bg: "bg-green-500/20" },
   { id: 5, title: "FinanceiroAPI", value: "Inativa", cor: "text-gray-500",  bg: "bg-gray-500/20" },
   { id: 6, title: "RelatóriosAPI", value: "Error",   cor: "text-red-500",   bg: "bg-red-500/20" },
   { id: 7, title: "LogísticaAPI",  value: "Ativa",   cor: "text-green-500", bg: "bg-green-500/20" },
   { id: 8, title: "MarketingAPI",  value: "Inativa", cor: "text-gray-500",  bg: "bg-gray-500/20" },
   { id: 9, title: "RHAPI",         value: "Ativa",   cor: "text-green-500", bg: "bg-green-500/20" },
]

export function MyAPIs() {
   return (
      <>
         <div>
            <Card>
               <h1 className="text-2xl py-4 pb-8 px-6">Minhas APIs</h1>
               <div className="overflow-y-auto max-h-[370px]">
                  {
                     items.map((item) => (
                        <div key={item.id}>
                           <div className="flex justify-between items-center px-6">
                              <h1 className="text-base font-medium text-gray-400">{item.title}</h1>
                              <CardContent className="px-5">
                                 <Badge variant="secondary" className={`px-5 py-1 ${item.bg} ${item.cor}`}>
                                    {item.value}
                                 </Badge>
                              </CardContent>
                           </div>
                           <hr className="border border-gray-800 my-5 ml-6 mr-11" />
                        </div>
                     ))
                  }
               </div>
            </Card>
         </div>
      </>
   )
}
