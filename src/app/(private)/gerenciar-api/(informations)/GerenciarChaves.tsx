import { DeleteKey } from "./components/DeleteKey";
import { RenovarKey } from "./components/RenovarKey";
import { Permissions } from "./components/Permissions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const items = [
   { id: 1, key: "alterra_rnqt0ynnf", date: "23/12/2024", },
   { id: 2, key: "alterra_tb5bgwyqz", date: "05/01/2025", },
   { id: 3, key: "alterra_7zq1z5z5z", date: "15/02/2025", },
   { id: 4, key: "alterra_5zq1z5z5z", date: "25/03/2025", },
   { id: 5, key: "alterra_4zq1z5z5z", date: "05/04/2025", },
   { id: 6, key: "alterra_3zq1z5z5z", date: "15/05/2025", },
]

export function GerenciarChaves() {
   return (
      <>
         <div className="flex-1">
            <Card>
               <h1 className="text-2xl py-4 pb-8 px-6">Gerenciar Chaves</h1>
               <div className="overflow-y-auto max-h-[150px] px-6">
                  {
                     items.map((item) => (
                        <div key={item.id}>
                           <div className="flex">
                              <div className="">
                                 <CardHeader>
                                    <CardTitle className="text-base font-medium text-gray-200">{item.key}</CardTitle>
                                 </CardHeader>
                                 <CardContent className="">
                                    <span className="text-sm text-gray-400">Criado em: {item.date}</span>
                                 </CardContent>
                              </div>
                              <div className="flex flex-1 items-center justify-end gap-3">
                                 <DeleteKey id={item.id} />
                                 <RenovarKey id={item.id} />
                                 <Permissions id={item.id} />
                              </div>
                           </div>
                           <hr className="border border-gray-800 my-3" />
                        </div>
                     ))
                  }
               </div>
            </Card>
         </div>
      </>
   )
}