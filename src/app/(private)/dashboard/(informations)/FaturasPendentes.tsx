
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WarningCircle } from "@phosphor-icons/react";

const items = [
   {
      title: "Total Faturas Pendentes",
      value: "1.500,00",
   }
]

export function FaturasPendentes() {
   return (
      <>
         {
            items.map((item) => (
               <Card key={item.value} className="px-6">
                  <CardHeader className="flex flex-row justify-center space-x-10 px-5 pt-4 pb-1">
                     <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                     <WarningCircle weight="bold" className="h-5 w-5 text-yellow-500" />
                  </CardHeader>
                  <CardContent className="px-5 pb-4">
                     <div className="text-2xl text-green-600">R$ {item.value}</div>
                  </CardContent>
               </Card>
            ))
         }
      </>
   )
}
