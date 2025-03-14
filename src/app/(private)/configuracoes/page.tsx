import { PageContent, PageDescription, PageHeader, PageTitle } from "@/components/ui/pageConfig";
import { ConfiguracaoTabs } from "./(informations)/ConfiguracaoTabs";

export default function Configuracoes() {
   return (
      <>
         <PageHeader>
            <PageTitle>Configurações da Conta</PageTitle>
            <PageDescription>Gerencie seu perfil, notificações, equipe e integrações.</PageDescription>
         </PageHeader>
         <PageContent >
            <ConfiguracaoTabs />
         </PageContent>
      </>
   )
}