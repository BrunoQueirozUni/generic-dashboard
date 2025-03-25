import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
         <Card>
            <CardHeader className="flex flex-row justify-center space-x-10 px-8">
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
                              <Badge variant={item.status === 200 ? "default" : item.status === 404 ? "yellow" : "red"}>
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
