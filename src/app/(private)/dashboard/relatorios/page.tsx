import { PageContent, PageDescription, PageHeader, PageTitle } from "@/components/ui/pageConfig";
import { RelatoriosFiltros } from "./(informations)/RelatoriosFiltros";
import { RelatoriosDeConsumo } from "./(informations)/RelatoriosDeConsumo";
import { FerramentaVsUso } from "./(informations)/FerramentaVsUso";

export default function Relatorios() {
   return (
      <>
         <PageHeader>
            <PageTitle>Relatórios</PageTitle>
            <PageDescription>Análise detalhada do uso da API, faturamento e tendências futuras.</PageDescription>
         </PageHeader>

         <RelatoriosFiltros />

         <PageContent>
            <RelatoriosDeConsumo />
            <FerramentaVsUso />
         </PageContent>
      </>
   )
}