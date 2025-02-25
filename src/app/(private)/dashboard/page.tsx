"use client"

import { AccoutStatus } from "./(informations)/AccountStatus";
import { ApiUsageChart } from "./(informations)/ApiUsageChart";
import { SaldoDisponivel } from "./(informations)/SaldoDisponivel";
import { UltimasChamadas } from "./(informations)/UltimasChamadas";
import { FaturasPendentes } from "./(informations)/FaturasPendentes";



export default function Dashboard() {
  return (
    <>
      <div className="text-white">
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <p className="text-xl text-muted-foreground text-gray-400">
          Bem-vindo ao painel de controle de APIs
        </p>
      </div>
      <div className="flex gap-8">
        <AccoutStatus />
        <SaldoDisponivel />
        <FaturasPendentes />
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-7">
        <div className="col-span-4">
          <ApiUsageChart />
        </div>
        <UltimasChamadas />
      </div>
    </>
  );
}
