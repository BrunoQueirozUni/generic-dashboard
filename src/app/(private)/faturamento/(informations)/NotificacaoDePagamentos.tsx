import * as Switch from "@radix-ui/react-switch";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const items = [
   { email: "email1@example.com" },
   { email: "email2@example.com" },
   { email: "email3@example.com" },
   { email: "email4@example.com" },
   { email: "email5@example.com" }
]

export function NotificacaoDePagamentos() {
   return (
      <>
         <Card>
            <CardTitle className="px-6 py-6">Notificações de Pagamentos</CardTitle>
            <CardContent>
               {
                  items.map((item, index) => (
                     <div key={index}>
                        <div className="flex items-center justify-between py-3 px-6">
                           <div className="flex gap-3 items-center">
                              <Switch.Root
                                 className="relative w-10 h-5 bg-gray-700 rounded-full transition 
                      data-[state=checked]:bg-primary focus:outline-none 
                      focus:ring-2 focus:ring-primary"
                              >
                                 <Switch.Thumb
                                    className="block w-4 h-4 bg-white rounded-full transition-transform 
                          transform translate-x-1 data-[state=checked]:translate-x-5"
                                 />
                              </Switch.Root>
                              <span className="text-gray-200">{item.email}</span>
                           </div>
                           <Button variant="gray">Remover</Button>
                        </div>
                        <hr className="border border-gray-800 mx-6" />
                     </div>
                  ))
               }
               <div className="px-6 py-6 flex gap-4">
                  <Input type="email" placeholder="Novo E-mail para notificação" />
                  <Button variant="white">Adicionar</Button>
               </div>
            </CardContent>
         </Card>
      </>
   )
}