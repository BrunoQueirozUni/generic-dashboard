import { Fatura } from "./(informations)/Faturas";
import { HistoricoDePagamentos } from "./(informations)/HistoricoDePagamentos";
import { TotalGasto } from "./(informations)/TotalGasto";

export default function Faturamento() {
   return (
      <>
         <div className="text-white">
            <h1 className="text-3xl font-semibold">Faturamento e Pagamentos</h1>
            <p className="text-xl text-muted-foreground text-gray-400">
               Gerencie suas faturas, pagamentos e planos de assinatura.
            </p>
         </div>
         <div>
            <div className="flex gap-8">
               <HistoricoDePagamentos />
               <TotalGasto />
            </div>
            <div>
               <Fatura />
            </div>
         </div>
      </>
   )
}