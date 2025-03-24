import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const logs = [
   { key: "alterra_rnqt0ynnf", ip: "214.241.123.23", req: "GET",    rota: "/api/v1/users",     date: "23/12/2024" },
   { key: "alterra_tb5bgwyqz", ip: "123.123.123.23", req: "POST",   rota: "/api/v1/products",  date: "05/01/2025" },
   { key: "alterra_7zq1z5z5z", ip: "564.432.34.43",  req: "GET",    rota: "/api/v1/orders",    date: "15/02/2025" },
   { key: "alterra_8xq2a6a6a", ip: "321.321.321.32", req: "DELETE", rota: "/api/v1/users",     date: "20/03/2025" },
   { key: "alterra_9yr3b7b7b", ip: "432.432.432.43", req: "PUT",    rota: "/api/v1/products",  date: "25/04/2025" },
   { key: "alterra_0zs4c8c8c", ip: "543.543.543.54", req: "PATCH",  rota: "/api/v1/orders",    date: "30/05/2025" },
   { key: "alterra_1at5d9d9d", ip: "654.654.654.65", req: "GET",    rota: "/api/v1/users",     date: "04/06/2025" }
]

export function LogsDeAcesso() {
   return (
      <>
         <Card>
            <CardTitle>Logs de Acesso</CardTitle>
            <CardContent>
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead>Chave</TableHead>
                        <TableHead>IP</TableHead>
                        <TableHead>Requisição</TableHead>
                        <TableHead>Rota</TableHead>
                        <TableHead>Date</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {logs.map((log, index) => (
                        <TableRow key={index}>
                           <TableCell>{log.key}</TableCell>
                           <TableCell>{log.ip}</TableCell>
                           <TableCell>{log.req}</TableCell>
                           <TableCell>{log.rota}</TableCell>
                           <TableCell>{log.date}</TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </CardContent>
         </Card>
      </>
   )
}