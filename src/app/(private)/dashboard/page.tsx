"use client"

import { Sidebar } from "@/app/(private)/(Navitagion)/Sidebar";
import { Header } from "../(Navitagion)/Header";
import { AccoutStatus } from "./(informations)/AccountStatus";
import { SaldoDisponivel } from "./(informations)/SaldoDisponivel";
import { FaturasPendentes } from "./(informations)/FaturasPendentes";
import { UltimasChamadas } from "./(informations)/UltimasChamadas";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex bg-gradient-to-br from-black via-gray-900 to-black">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="flex flex-col gap-8 p-20">
          <div className="text-white">
            <h1 className="text-4xl font-semibold">Dashboard</h1>
            <p className="text-xl text-muted-foreground">
              Bem-vindo ao painel de controle de APIs
            </p>
          </div>
          <div className="flex gap-8">
            <AccoutStatus />
            <SaldoDisponivel />
            <FaturasPendentes />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="col-span-4">
              a
            </div>
            <UltimasChamadas />
          </div>
        </div>
      </div>
    </div>
  );
}
