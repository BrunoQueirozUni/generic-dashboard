import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pulse } from "@phosphor-icons/react";

const items = [
   {
      title: "Status da Conta",
      value: "Ativa",
   }
]

export function StatusDaConta() {
   return (
      <>
         {
            items.map((item) => (
               <Card key={item.value} className="px-6">
                  <CardHeader className="flex flex-row justify-center space-x-10 px-5 pt-4 pb-1">
                     <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                     <Pulse weight="bold" className="h-5 w-5 text-green-500" />
                  </CardHeader>
                  <CardContent className="px-5 pb-4">
                     <div className="text-2xl">{item.value}</div>
                     <Badge variant="outline" className="mt-2 bg-green-500/20 text-green-500">
                        Ativa
                     </Badge>
                  </CardContent>
               </Card>
            ))
         }
      </>
   )
}
