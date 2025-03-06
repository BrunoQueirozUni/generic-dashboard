import { GraficoDeConsumo } from "./(informations)/GraficoDeConsumo";
import { LatenciaMediaDasChamdas } from "./(informations)/LatenciaMediaDasChamadas";

export default function Monitoramento() {
   return (
      <>
         <div className="text-white">
            <h1 className="text-3xl font-semibold">Monitoramento de Consumo da API</h1>
            <p className="text-xl text-muted-foreground text-gray-400">
               Acompanhe o uso, desempenho e erros da sua API.
            </p>
         </div>
         <div>
            <GraficoDeConsumo />
            <LatenciaMediaDasChamdas />
         </div>
      </>
   )
}