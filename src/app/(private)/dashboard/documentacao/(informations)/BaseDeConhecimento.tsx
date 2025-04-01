"use client"

import * as Tabs from "@radix-ui/react-tabs"

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Animation } from "@/components/ui/animation";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Book, Code, FileText, Globe, MagnifyingGlass, WarningCircle } from "@phosphor-icons/react";

const TabsDesign = {
   tabsDesign: "flex items-center justify-center gap-3 hover:bg-gray-950 data-[state=active]:bg-gray-950 cursor-pointer py-1 rounded-sm flex-1"
}

interface Article {
   id: number
   title: string
   category: "faq" | "tutorial" | "guide"
   content: string
}

const articles: Article[] = [
   {
      id: 1,
      title: "Como gerar uma nova API Key",
      category: "faq",
      content:
         "Para gerar uma nova API Key, acesse a seção 'Gerenciar APIs' no dashboard e clique em 'Gerar Nova Chave'. Você pode definir permissões específicas para cada chave gerada.",
   },
   {
      id: 2,
      title: "Limites de requisições por plano",
      category: "faq",
      content:
         "Cada plano tem um limite diferente de requisições. O plano Básico permite 100 requisições por dia, o plano Pro permite 1000 requisições por dia, e o plano Enterprise oferece requisições ilimitadas.",
   },
   {
      id: 3,
      title: "Como integrar a API com Node.js",
      category: "tutorial",
      content:
         "Este tutorial mostra como integrar nossa API com Node.js usando a biblioteca axios. Primeiro, instale a biblioteca com npm install axios. Em seguida, crie uma instância do axios com sua API Key nos headers...",
   },
   {
      id: 4,
      title: "Autenticação com OAuth 2.0",
      category: "tutorial",
      content:
         "Neste tutorial, você aprenderá a implementar autenticação OAuth 2.0 com nossa API. Primeiro, registre sua aplicação no dashboard para obter um client_id e client_secret...",
   },
   {
      id: 5,
      title: "Guia de Integração Completo",
      category: "guide",
      content:
         "Este guia completo cobre todos os aspectos da integração com nossa API, desde a autenticação até o uso de endpoints específicos. Recomendado para desenvolvedores que estão começando a usar nossa API.",
   },
   {
      id: 6,
      title: "Melhores práticas para uso da API",
      category: "guide",
      content:
         "Aprenda as melhores práticas para usar nossa API de forma eficiente. Este guia cobre tópicos como cache, rate limiting, tratamento de erros e otimização de performance.",
   },
]

export function BaseDeConhecimento() {
   const [searchTerm, setSearchTerm] = useState("")
   const [activeCategory, setActiveCategory] = useState<"faq" | "tutorial" | "guide" | "all">("all")

   const filteredArticles = articles.filter((article) => {
      const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || article.content.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = activeCategory === "all" || article.category === activeCategory
      return matchesSearch && matchesCategory
   })

   return (
      <>
         <Card>
            <CardTitle className="pb-0">Base de Conhecimento</CardTitle>
            <CardDescription>Encontre respostas para suas perguntas e aprenda a usar nossa API</CardDescription>
            <CardContent className="pt-6">
               <div className="flex gap-3">
                  <Input
                     placeholder="Pesquisar na documentação..."
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     type="search"
                     className="flex-grow"
                  />
                  <Button variant="gray" className="flex items-center gap-4">
                     <MagnifyingGlass size={25} />
                     Pesquisar
                  </Button>
               </div>
               <Tabs.Root defaultValue="all" onValueChange={(value) => setActiveCategory(value as any)}>


                  <Tabs.List className="pt-6"> {/* Container */}
                     <div className="w-full bg-gray-700/50 rounded-sm py-1 px-1 flex gap-2"> {/* Tabs */}
                        <Tabs.Trigger className={TabsDesign.tabsDesign} value="all">
                           <Globe size={20} />
                           Todos
                        </Tabs.Trigger>
                        <Tabs.Trigger className={TabsDesign.tabsDesign} value="faq">
                           <FileText size={20} />
                           FAQs
                        </Tabs.Trigger>
                        <Tabs.Trigger className={TabsDesign.tabsDesign} value="tutorial">
                           <Book size={20} />
                           Tutoriais
                        </Tabs.Trigger>
                        <Tabs.Trigger className={TabsDesign.tabsDesign} value="guide">
                           <Code size={20} />
                           Guias
                        </Tabs.Trigger>
                     </div>
                  </Tabs.List>


                  <div className="">
                     <Tabs.Content value="all">
                        <ArticleList articles={filteredArticles} />
                     </Tabs.Content>
                     <Tabs.Content value="faq">
                        <ArticleList articles={filteredArticles} />
                     </Tabs.Content>
                     <Tabs.Content value="tutorial">
                        <ArticleList articles={filteredArticles} />
                     </Tabs.Content>
                     <Tabs.Content value="guide">
                        <ArticleList articles={filteredArticles} />
                     </Tabs.Content>
                  </div>
               </Tabs.Root>
            </CardContent>
         </Card>
      </>
   )
}

function ArticleList({ articles }: { articles: Article[] }) {
   return (
      <Animation className="gap-0">
         {
            articles.length > 0 ? (
               articles.map((articles) => (
                  <div key={articles.id} className="border border-gray-700 p-4 py-5 mt-4 rounded-md">
                     <div className="flex justify-between pb-4">
                        <h1 className="text-lg">{articles.title}</h1>
                        <Badge variant="article">
                           {articles.category === "faq" ? "FAQ" : articles.category === "tutorial" ? "Tutorial" : "Guia"}
                        </Badge>
                     </div>
                     <div>
                        <span className="text-sm text-gray-400">{articles.content}</span>
                     </div>
                     <Button variant="link-blue" className="p-0">
                        <Link href={`/dashboard/documentacao/artigos/${articles.id}`}>Ler mais</Link>
                     </Button>
                  </div>
               ))
            ) : (
               <div className="p-8 flex items-center justify-center gap-2 bg-gray-800/50 rounded-md mt-4">
                  <WarningCircle size={30} />
                  <p>Nenhum artigo encontrado. Tente uma pesquisa diferente.</p>
               </div>
            )
         }
      </Animation>
   )
}
