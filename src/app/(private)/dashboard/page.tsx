"use client"

import { AccoutStatus } from "./(informations)/AccountStatus";
import { ApiUsageChart } from "./(informations)/ApiUsageChart";
import { SaldoDisponivel } from "./(informations)/SaldoDisponivel";
import { UltimasChamadas } from "./(informations)/UltimasChamadas";
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

      <PageContent>
        <AccoutStatus />
        <SaldoDisponivel />
        <FaturasPendentes />
      </PageContent>

      <PageContent>
        <div className="flex-1">
          <ApiUsageChart />
        </div>
        <UltimasChamadas />
      </PageContent>
    </>
  );
}
