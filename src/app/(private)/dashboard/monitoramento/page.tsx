import { LimiteDeUso } from "./(informations)/LimiteDeUso";
import { ErrosEFalhas } from "./(informations)/ErrosEFalhas";
import { GraficoDeConsumo } from "./(informations)/GraficoDeConsumo";
import { ConsumoPorChaveAPI } from "./(informations)/ConsumoPorChaveAPI";
import { LatenciaMediaDasChamdas } from "./(informations)/LatenciaMediaDasChamadas";
import { PageContent, PageDescription, PageHeader, PageTitle } from "@/components/ui/pageConfig";

export default function Monitoramento() {
   return (
      <>
         <PageHeader>
            <PageTitle>Monitoramento de Consumo da API</PageTitle>
            <PageDescription>
               Acompanhe o uso, desempenho e erros da sua API.
            </PageDescription>
         </PageHeader>
         <PageContent className="flex-col">
            <GraficoDeConsumo />
            <LatenciaMediaDasChamdas />
            <ErrosEFalhas />
            <ConsumoPorChaveAPI />
            <LimiteDeUso />
         </PageContent>
      </>
   )
}