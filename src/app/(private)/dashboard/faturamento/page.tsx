import { Fatura } from "./(informations)/Faturas";
import { TotalGasto } from "./(informations)/TotalGasto";
import { MetodoDePagamento } from "./(informations)/MetodoDePagamento";
import { HistoricoDePagamentos } from "./(informations)/HistoricoDePagamentos";
import { NotificacaoDePagamentos } from "./(informations)/NotificacaoDePagamentos";
import { PageContent, PageDescription, PageHeader, PageTitle } from "@/components/ui/pageConfig";

export default function Faturamento() {
   return (
      <>
         <PageHeader>
            <PageTitle>Faturamento e Pagamentos</PageTitle>
            <PageDescription>
               Gerencie suas faturas, pagamentos e planos de assinatura.
            </PageDescription>
         </PageHeader>
         <PageContent className="flex-col">
            <div className="flex gap-8">
               <HistoricoDePagamentos />
               <TotalGasto />
            </div>
            <Fatura />
            <MetodoDePagamento />
            <NotificacaoDePagamentos />
         </PageContent>
      </>
   )
}