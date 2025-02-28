import { Card, CardContent } from "@/components/ui/card";
import { AdicionarMetodoDePagamento } from "./components/AdicionarMetodoDePagamento";

export function MetodoDePagamento() {
   return (
      <>
         <Card className="px-6 py-6">
            <h1 className="text-2xl pb-4">Método de Pagamento</h1>
            <CardContent>
               <AdicionarMetodoDePagamento />
            </CardContent>
         </Card>
      </>
   )
}