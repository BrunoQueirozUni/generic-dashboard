"use client"

import { StatusDaConta } from "./(informations)/StatusDaConta";
import { SaldoDisponivel } from "./(informations)/SaldoDisponivel";
import { UltimasChamadas } from "./(informations)/UltimasChamadas";
import { ResumoDeUsoDaAPI } from "./(informations)/ResumoDeUsoDaAPI";
import { FaturasPendentes } from "./(informations)/FaturasPendentes";
import { PageContent, PageDescription, PageHeader, PageTitle } from "@/components/ui/pageConfig";

export default function Dashboard() {
  return (
    <>
      <PageHeader>
        <PageTitle>Dashboard</PageTitle>
        <PageDescription>
          Bem-vindo ao painel de controle de APIs
        </PageDescription>
      </PageHeader>

      <PageContent className="flex-row">
        <StatusDaConta />
        <SaldoDisponivel />
        <FaturasPendentes />
      </PageContent>

      <PageContent className="flex-row">
        <div className="flex-1">
          <ResumoDeUsoDaAPI />
        </div>
        <UltimasChamadas />
      </PageContent>
    </>
  );
}
