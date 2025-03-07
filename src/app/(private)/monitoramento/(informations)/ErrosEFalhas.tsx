import { Card, CardContent } from "@/components/ui/card";

const logs = [
   { timestamp: "12/01/2025 - 10:00", endpoint: "/api/users", error: "401 Unauthorized", message: "Invalid API key" },
   { timestamp: "21/01/2025 - 11:57", endpoint: "/api/products", error: "404 Not Found", message: "Product ID not found" },
   { timestamp: "27/01/2025 - 07:99", endpoint: "/api/orders", error: "500 Internal Server Error", message: "Database connection failed" },
   { timestamp: "02/02/2025 - 21:45", endpoint: "/api/users", error: "401 Unauthorized", message: "Invalid API key" },
   { timestamp: "03/02/2025 - 07:07", endpoint: "/api/products", error: "404 Not Found", message: "Product ID not found" },
   { timestamp: "04/03/2025 - 11:11", endpoint: "/api/orders", error: "404 Not Found", message: "Product ID not found" },
]

export function ErrosEFalhas() {
   return (
      <>
         <Card className="px-6">
            <h1 className="text-2xl py-6 pb-8 font-normal">Erros e Falhas</h1>
            <CardContent>
               <table className="w-full border-collapse">
                  <thead className="text-gray-400">
                     <tr className="hover:bg-gray-800/70 transition duration-100">
                        <th className="text-left px-4 py-3">Timestamp</th>
                        <th className="text-left px-4 py-3">Endpoint</th>
                        <th className="text-left px-4 py-3">Error</th>
                        <th className="text-left px-4 py-3">Mensagem</th>
                     </tr>
                  </thead>
                  <tbody>
                     {logs.map((log, index) => (
                        <tr key={index} className="border-t border-gray-800 hover:bg-gray-800/70 transition duration-100">
                           <td className="px-4 py-3">{log.timestamp}</td>
                           <td className="px-4 py-3">{log.endpoint}</td>
                           <td className="px-4 py-3">{log.error}</td>
                           <td className="px-4 py-3">{log.message}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </CardContent>
         </Card>
      </>
   )
}