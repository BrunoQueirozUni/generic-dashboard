"use client";

import { ContatoComSuporteTabs } from "./ContatoComSuporteTabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

export function ContatoComSuporte() {
  return (
    <>
      <Card className="flex-1">
        <CardTitle className="px-0 pt-6 pb-1">Contato Com Suporte</CardTitle>
        <CardDescription>
          Entre em contato com nossa equipe de suporte
        </CardDescription>
        <CardContent className="pt-6">
          <ContatoComSuporteTabs />
        </CardContent>
      </Card>
    </>
  );
}

/*

<div className="flex gap-4">
                  <Input placeholder="Digite seu nome" />
                  <Button variant="gray" className="flex gap-4">
                     <MagnifyingGlass size={32} />
                     Pesquisar
                  </Button>
               </div>

*/
