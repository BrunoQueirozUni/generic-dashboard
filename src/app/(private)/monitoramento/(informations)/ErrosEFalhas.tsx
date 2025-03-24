import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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
         <Card>
            <CardTitle>Erros e Falhas</CardTitle>
            <CardContent>
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead>Timestamp</TableHead>
                        <TableHead>Endpoint</TableHead>
                        <TableHead>Error</TableHead>
                        <TableHead>Mensagem</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {logs.map((log, index) => (
                        <TableRow key={index}>
                           <TableCell>{log.timestamp}</TableCell>
                           <TableCell>{log.endpoint}</TableCell>
                           <TableCell>{log.error}</TableCell>
                           <TableCell>{log.message}</TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </CardContent>
         </Card>
      </>
   )
}