"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowFatLeft, FileMagnifyingGlass } from "@phosphor-icons/react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { use } from "react";

const articles = [
   {
      id: "1",
      title: "Como gerar uma nova API Key",
      description: "Aprenda a gerar uma nova chave de API para acessar nossos serviços.",
      category: "faq",
      content: `
      `,
   },
];

interface ArticlePageProps {
   params: Promise<{ id: string }>
}

export default function ArticlePage({ params }: ArticlePageProps) {
   const { id } = use(params);
   const article = articles.find((a) => a.id === id)

   if (!article) {
      return (
         <>
            <Card>
               <CardContent className="pt-6">
                  <div className="p-6 flex flex-col items-center gap-3 border border-gray-700 rounded-md">
                     <FileMagnifyingGlass size={70} className="text-gray-400" />
                     <h1 className="text-xl">Artigo não encontrado</h1>
                     <p className="text-gray-400">O artigo que você está procurando não existe ou foi removido.</p>
                     <div>
                        <Button asChild variant="gray">
                           <Link href="/dashboard/documentacao" className="flex">
                              <ArrowFatLeft size={32} />
                              Voltar para a documentação
                           </Link>
                        </Button>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </>
      );
   }

   return (
      <>
         <Card key={article.id} className="pt-6">
            <div>
               <Button asChild variant="gray">
                  <Link href="/dashboard/documentacao" className="flex">
                     <ArrowFatLeft size={32} />
                     Voltar para a documentação
                  </Link>
               </Button>
            </div>
            <CardTitle className="pb-0">{article.title}</CardTitle>
            <CardDescription>{article.description}</CardDescription>
            <CardContent>
               <div className="pt-6 text-center">
                  <p className="text-gray-400">{article.content}</p>
               </div>
            </CardContent>
         </Card>
      </>
   );
}