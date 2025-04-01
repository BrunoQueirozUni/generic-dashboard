import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const api = [
   {
      id: 1,
      title: "Endpoints",
      description: "Documentação detalhada de todos os endpoints disponíveis na API.",
      url: "/documentacao/api/endpoints",
   },
   {
      id: 2,
      title: "Autenticação",
      description: "Aprenda como autenticar suas requisições usando API Keys ou OAuth.",
      url: "/documentacao/api/autenticacao",
   },
   {
      id: 3,
      title: "Webhooks",
      description: "Configure webhooks para receber notificações em tempo real.",
      url: "/documentacao/api/webhooks",
   },
]

export function DocumentacaoAPI() {
   return (
      <>
         <Card>
            <CardTitle className="pb-0">Documentação API</CardTitle>
            <CardDescription>Referência técnica completa da API</CardDescription>
            <CardContent>
               <div className="flex gap-4 pt-6">
                  {
                     api.map((item) => (
                        <div key={item.id} className="flex flex-col gap-2 border border-gray-700 p-4 rounded-md">
                           <h3 className="text-lg">{item.title}</h3>
                           <span className="text-gray-400">{item.description}</span>
                           <div>
                              <Button variant="link-blue" className="pl-0">
                                 <Link href={item.url}>Ver Documentação</Link>
                              </Button>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </CardContent>
         </Card>
      </>
   )
}