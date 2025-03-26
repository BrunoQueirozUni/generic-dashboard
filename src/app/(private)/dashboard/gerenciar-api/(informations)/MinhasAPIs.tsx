import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const items = [
   { id: 1, title: "UsuáriosAPI",   value: "Ativa"   },
   { id: 2, title: "ProdutosAPI",   value: "Ativa"   },
   { id: 3, title: "VendasAPI",     value: "Inativa" },
   { id: 4, title: "EstoqueAPI",    value: "Ativa"   },
   { id: 5, title: "FinanceiroAPI", value: "Inativa" },
   { id: 6, title: "RelatóriosAPI", value: "Error"   },
   { id: 7, title: "LogísticaAPI",  value: "Ativa"   },
   { id: 8, title: "MarketingAPI",  value: "Inativa" },
   { id: 9, title: "RHAPI",         value: "Ativa"   },
]

export function MinhasAPIs() {
   return (
      <>
         <Card>
            <CardTitle>Minhas APIs</CardTitle>
            <CardContent className="overflow-y-auto max-h-[370px]">
               {
                  items.map((item) => (
                     <div key={item.id}>
                        <div className="flex justify-between items-center px-6">
                           <h1 className="text-base font-medium text-gray-400">{item.title}</h1>
                           <div className="px-6">
                              <Badge variant={item.value === "Ativa" ? "default" : item.value === "Inativa" ? "yellow" : "red"} className="px-5 py-1">
                                 {item.value}
                              </Badge>
                           </div>
                        </div>
                        <hr className="border border-gray-800 my-5 ml-6 mr-11" />
                     </div>
                  ))
               }
            </CardContent>
         </Card>
      </>
   )
}
