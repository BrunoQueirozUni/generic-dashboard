import { Card, CardContent, CardTitle } from "@/components/ui/card";

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
          <table className="w-full border-collapse">
            <thead className="text-gray-400">
              <tr className="hover:bg-gray-800/70 transition duration-100">
                <th className="text-left px-4 py-3">Métodos</th>
                <th className="text-left px-4 py-3">URL</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-left px-4 py-3">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {items.map((items, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-800 hover:bg-gray-800/70 transition duration-100"
                >
                  <td className="px-4 py-3">{items.data}</td>
                  <td className="px-4 py-3">{items.valor}</td>
                  <td className="px-4 py-3">{items.status}</td>
                  <td className="px-4 py-3">{items.timestamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </>
  );
}
