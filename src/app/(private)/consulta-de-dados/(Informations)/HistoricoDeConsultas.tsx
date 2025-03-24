import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const items = [
  { data: "GET",   valor: "/api/v1/users",   status: "200", timestamp: "2023-10-01 12:34:56" },
  { data: "POST",  valor: "/api/v1/users",   status: "201", timestamp: "2023-10-02 14:22:33" },
  { data: "PUT",   valor: "/api/v1/users/1", status: "200", timestamp: "2023-10-03 09:11:22" },
  { data: "DELETE",valor: "/api/v1/users/1", status: "204", timestamp: "2023-10-04 16:45:00" },
];

export function HistoricoDeConsulta() {
  return (
    <>
      <Card>
        <CardTitle>Histórico de Consultas</CardTitle>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Métodos</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((items, index) => (
                <TableRow key={index}>
                  <TableCell>{items.data}</TableCell>
                  <TableCell>{items.valor}</TableCell>
                  <TableCell>{items.status}</TableCell>
                  <TableCell>{items.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
