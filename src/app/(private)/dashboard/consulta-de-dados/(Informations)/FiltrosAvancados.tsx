"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Componente alert
import { useAlert } from "@/components/Alert";
import { Animation } from "@/components/ui/animation";

// Dados simulados
const allQueries = [
  { id: 1, method: "GET", url: "/api/users", status: 200, timestamp: "2023-07-08 10:30:00", responseType: "json" },
  { id: 2, method: "POST", url: "/api/orders", status: 201, timestamp: "2023-07-09 11:15:00", responseType: "json" },
  { id: 3, method: "PUT", url: "/api/products/1", status: 200, timestamp: "2023-07-10 12:00:00", responseType: "json" },
  { id: 4, method: "GET", url: "/api/products", status: 200, timestamp: "2023-07-11 13:45:00", responseType: "xml" },
  { id: 5, method: "DELETE", url: "/api/users/2", status: 204, timestamp: "2023-07-12 14:30:00", responseType: "text" },
  { id: 6, method: "GET", url: "/api/orders/3", status: 404, timestamp: "2023-07-13 15:15:00", responseType: "json" },
  { id: 7, method: "POST", url: "/api/auth/login", status: 401, timestamp: "2023-07-14 16:00:00", responseType: "json" },
  { id: 8, method: "GET", url: "/api/reports", status: 500, timestamp: "2023-07-15 17:30:00", responseType: "text" },
]

export function FiltrosAvancados() {

  const { showAlert } = useAlert();

  const [startDate, setStartDate] = useState(""); // Procura pela data inicial
  const [endDate, setEndDate] = useState(""); // Procura pela data final
  const [status, setStatus] = useState("todos"); // Procura pelo status
  const [responseType, setResponseType] = useState("todos"); // Procura pelo tipo de resposta

  const [filteredQueries, setFilteredQueries] = useState<typeof allQueries>([]);
  const [filtersApplied, setFiltersApplied] = useState(false);

  const handlefilters = () => {
    let filtered = [...allQueries]

    // Filtrar por data inicial
    if (startDate) {
      filtered = filtered.filter((query) => {
        const queryDate = new Date(query.timestamp)
        const filterDate = new Date(startDate)
        return queryDate >= filterDate
      })
    }

    // Filtrar por data final
    if (endDate) {
      filtered = filtered.filter((query) => {
        const queryDate = new Date(query.timestamp)
        const filterDate = new Date(endDate)
        return queryDate <= filterDate
      })
    }

    // Filtrar por status
    if (status && status !== "todos") {
      filtered = filtered.filter((query) => query.status === Number.parseInt(status))
    }

    // Filtrar por tipo de resposta
    if (responseType && responseType !== "todos") {
      filtered = filtered.filter((query) => query.responseType === responseType)
    }

    setFilteredQueries(filtered)
    setFiltersApplied(true)

    showAlert("filter")
  }

  return (
    <>
      <Card>
        <CardTitle>Filtros Avançados</CardTitle>
        <CardContent>
          <div className="flex gap-4">
            <div>
              <Label className="block mb-2">Data Inicial</Label>
              <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div>
              <Label className="block mb-2">Data Final</Label>
              <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div>
              <Label className="block mb-2">
                Status
              </Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger className="w-[220px]">
                  <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="200">200 OK</SelectItem>
                  <SelectItem value="201">201 Created</SelectItem>
                  <SelectItem value="400">400 Bad Request</SelectItem>
                  <SelectItem value="401">401 Unauthorized</SelectItem>
                  <SelectItem value="404">404 Not Found</SelectItem>
                  <SelectItem value="500">500 Internal Server Error</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block mb-2">
                Tipo de Resposta
              </Label>
              <Select value={responseType} onValueChange={setResponseType}>
                <SelectTrigger className="w-[170px]">
                  <SelectValue placeholder="Selecione o tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todos">Todos</SelectItem>
                  <SelectItem value="json">JSON</SelectItem>
                  <SelectItem value="xml">XML</SelectItem>
                  <SelectItem value="text">Text</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button onClick={handlefilters} variant="white" className="mt-6">Aplicar Filtros</Button>
          {
            filtersApplied && (
              <div className="mt-6 w-full flex-1">
                <h3 className="text-lg font-semibold mb-2">Resultado Filtrados:</h3>
                {
                  filteredQueries.length > 0 ? (
                    <Animation>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Métodos</TableHead>
                            <TableHead>URL</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Timestamp</TableHead>
                            <TableHead>Tipo de resposta</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredQueries.map((query) => (
                            <TableRow key={query.id}>
                              <TableCell>{query.method}</TableCell>
                              <TableCell>{query.url}</TableCell>
                              <TableCell>{query.status}</TableCell>
                              <TableCell>{query.timestamp}</TableCell>
                              <TableCell>{query.responseType}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Animation>
                  ) : (
                    <p className="flex gap-2 border p-3 rounded-md text-gray-400">
                      <AlertCircle size={24} />
                      <span>Nenhum resultado encontrado para os filtros aplicados.</span>
                    </p>
                  )}
              </div>
            )
          }
        </CardContent>
      </Card>
    </>
  );
}