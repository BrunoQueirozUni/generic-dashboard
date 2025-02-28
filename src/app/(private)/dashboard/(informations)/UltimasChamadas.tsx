import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pulse } from "@phosphor-icons/react";

const items = [
   { id: 1, endpoint: "/api/users",         time: "120ms", status: 200 },
   { id: 2, endpoint: "/api/tickets",       time: "95ms",  status: 200 },
   { id: 3, endpoint: "/api/transactions",  time: "150ms", status: 404 },
   { id: 4, endpoint: "/api/auth",          time: "80ms",  status: 200 },
   { id: 5, endpoint: "/api/notifications", time: "200ms", status: 500 }
]

export function UltimasChamadas() {
   return (
      <>
         <Card className="px-6 col-span-3">
            <CardHeader className="flex flex-row justify-center space-x-10 px-5 pt-6 pb-7">
               <CardTitle className="text-xl">Últimas chamadas da API</CardTitle>
            </CardHeader>
            <CardContent className="px-5 pb-4">
               <div className="space-y-5">
                  {
                     items.map((item) => (
                        <div key={item.id} className="flex items-center">
                           <div className="space-y-1 flex flex-col">
                              <span className="text-sm font-medium leading-none -tracking-tighter">{item.endpoint}</span>
                              <span className="text-xs text-gray-500">{item.time}</span>
                           </div>
                           <div className="ml-auto font-medium">
                              <Badge
                                 variant="secondary"
                                 className={`${item.status === 200
                                       ? "bg-green-500/20 text-green-500"
                                       : item.status === 404
                                          ? "bg-yellow-500/20 text-yellow-500"
                                          : "bg-red-500/20 text-red-500"
                                    }`}
                              >
                                 {item.status}
                              </Badge>
                           </div>
                        </div>
                     ))
                  }
               </div>
            </CardContent>
         </Card>
      </>
   )
}
