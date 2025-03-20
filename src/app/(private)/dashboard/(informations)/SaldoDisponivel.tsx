import { CurrencyDollar } from "@phosphor-icons/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
   {
      title: "Saldo Disponivel",
      value: "50.000,00",
   }
]

export function SaldoDisponivel() {
   return (
      <>
         {
            items.map((item) => (
               <Card key={item.value} className="px-10">
                  <CardHeader className="flex flex-row justify-center space-x-10 pt-4 pb-1">
                     <CardTitle className="text-sm font-medium py-0">{item.title}</CardTitle>
                     <CurrencyDollar weight="bold" className="h-5 w-5 text-blue-500" />
                  </CardHeader>
                  <CardContent>
                     <div className="text-2xl">R$ {item.value}</div>
                  </CardContent>
               </Card>
            ))
         }
      </>
   )
}
