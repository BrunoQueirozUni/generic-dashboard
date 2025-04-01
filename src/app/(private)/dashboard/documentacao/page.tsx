import { DocumentacaoAPI } from "./(informations)/DocumentacaoAPI";
import { BaseDeConhecimento } from "./(informations)/BaseDeConhecimento";
import { PageContent, PageDescription, PageHeader, PageTitle } from "@/components/ui/pageConfig";

export default function Documentacao() {
   return (
      <>
         <PageHeader>
            <PageTitle>Documentação</PageTitle>
            <PageDescription>Acesse nossa base de conhecimento, tutoriais e guias de integração.</PageDescription>
         </PageHeader>
         <PageContent>
            <BaseDeConhecimento />
            <DocumentacaoAPI />
         </PageContent>
      </>
   )
}