import { Badge } from "@/components/ui/badge";
import { Pulse } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
               <Card key={item.value} className="px-10">
                  <CardHeader className="flex flex-row justify-center space-x-10 pt-4 pb-1">
                     <CardTitle className="text-sm font-medium py-0">{item.title}</CardTitle>
                     <Pulse weight="bold" className="h-5 w-5 text-green-500" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl">{item.value}</div>
                     <Badge variant="default" className="mt-2">
                        Ativa
                     </Badge>
                  </CardContent>
               </Card>
            ))
         }
      </>
   )
}
