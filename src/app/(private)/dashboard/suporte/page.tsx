import { ContatoComSuporte } from "./(informations)/ContatoComSuporte";
import { PageContent, PageDescription, PageHeader, PageTitle } from "@/components/ui/pageConfig";
import { StatusDoservico } from "./(informations)/StatusDoServico";

export default function Suporte() {
   return (
      <>
         <PageHeader>
            <PageTitle>Suporte</PageTitle>
            <PageDescription>Entre em contato com nossa equipe de suporte e verifique o status dos serviços.</PageDescription>
         </PageHeader>
         <PageContent>
            <ContatoComSuporte />
            <StatusDoservico />
         </PageContent>
      </>
   )
}