import { FiltrosAvancados } from "./(Informations)/FiltrosAvancados";
import { HistoricoDeConsulta } from "./(Informations)/HistoricoDeConsultas";
import { TesteDeEndpoints } from "./(Informations)/TesteDeEndpoint";
import { PageContent, PageDescription, PageHeader, PageTitle } from "@/components/ui/pageConfig";

export default function ConsultaDeDados() {
   return (
      <>
         <PageHeader>
            <PageTitle>Consulta de Dados da API</PageTitle>
            <PageDescription>
               Teste endpoints, visualize histórico e exporte dados.
            </PageDescription>
         </PageHeader>
         <PageContent className="flex-col">
            <TesteDeEndpoints />
            <HistoricoDeConsulta />
            <FiltrosAvancados />
         </PageContent>
      </>
   )
}