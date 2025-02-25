
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const items = [
   { id: 1, title: "alterra_rnqt0ynnf", date: "23/12/2024", },
   { id: 2, title: "alterra_tb5bgwyqz", date: "05/01/2025", },
   { id: 3, title: "alterra_7zq1z5z5z", date: "15/02/2025", },
   { id: 4, title: "alterra_5zq1z5z5z", date: "25/03/2025", },
   { id: 5, title: "alterra_4zq1z5z5z", date: "05/04/2025", },
   { id: 6, title: "alterra_3zq1z5z5z", date: "15/05/2025", },
]

export function GerenciarChaves() {
   return (
      <>
         <div className="flex-1">
            <Card className="text-white border-b border-gray-800 bg-gray-900/50 backdrop-blur-xl">
               <h1 className="text-2xl py-4 pb-8 px-6">Gerenciar Chaves</h1>
               <div className="overflow-y-auto max-h-[150px] px-6">
                  {
                     items.map((item) => (
                        <>
                           <div className="flex">
                              <div key={item.id} className="">
                                 <CardHeader>
                                    <CardTitle className="text-base font-medium text-gray-200">{item.title}</CardTitle>
                                 </CardHeader>
                                 <CardContent className="">
                                    <span className="text-sm text-gray-400">Criado em: {item.date}</span>
                                 </CardContent>
                              </div>
                              <div className="flex flex-1 items-center justify-end gap-5">
                                 <Button className="bg-transparent border border-gray-500 hover:bg-gray-800/70 cursor-pointer">Revogar</Button>
                                 <Button className="bg-transparent border border-gray-500 hover:bg-gray-800/70 cursor-pointer">Regenerar</Button>
                              </div>
                           </div>
                           <hr className="border border-gray-800 my-3 " />
                        </>
                     ))
                  }
               </div>
            </Card>
         </div>
      </>
   )
}