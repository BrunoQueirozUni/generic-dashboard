import { WarningCircle } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
               <Card key={item.value} className="px-10">
                  <CardHeader className="flex flex-row justify-center space-x-10 pt-4 pb-1">
                     <CardTitle className="text-sm font-medium py-0">{item.title}</CardTitle>
                     <WarningCircle weight="bold" className="h-5 w-5 text-yellow-500" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl text-green-600">R$ {item.value}</div>
                  </CardContent>
               </Card>
            ))
         }
      </>
   )
}
