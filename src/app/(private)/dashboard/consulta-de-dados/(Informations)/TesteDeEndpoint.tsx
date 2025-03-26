"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function TesteDeEndpoints() {
   const [selectedValue, setSelectedValue] = useState("GET");
   const [url, setUrl] = useState("")
   const [body, setBody] = useState("")
   const [response, setResponse] = useState("")

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      // lógica da requisição
      setResponse(JSON.stringify({ message: "Resposta simulada da API" }, null, 2))
   }

   return (
      <>
         <Card>
            <CardTitle>Teste de Endpoints</CardTitle>
            <CardContent>
               <form onSubmit={handleSubmit}>
                  <div className="flex gap-4 pb-4">
                     <Select value={selectedValue} onValueChange={setSelectedValue}>
                        <SelectTrigger>
                           <SelectValue placeholder="Método" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="GET">GET</SelectItem>
                           <SelectItem value="POST">POST</SelectItem>
                           <SelectItem value="PUT">PUT</SelectItem>
                           <SelectItem value="DELETE">DELETE</SelectItem>
                        </SelectContent>
                     </Select>
                     <Input
                        placeholder="URL do endpoint"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="flex-grow"
                     />
                  </div>
                  {(selectedValue === "POST" || selectedValue === "PUT") && (
                     <Textarea placeholder="Corpo da requisição (JSON)" value={body} onChange={(e) => setBody(e.target.value)} />
                  )}
                  <Button variant="white" type="submit" className="mt-4">Enviar Requisição</Button>
               </form>
               {response && (
                  <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: 20 }}
                     transition={{ duration: 0.3 }}
                     className="flex flex-col gap-6"
                  >
                     <div className="mt-4">
                        <h4 className="mb-2 font-semibold">Resposta:</h4>
                        <pre className="bg-gray-800/80 p-4 rounded-md overflow-auto">{response}</pre>
                     </div>
                  </motion.div>
               )}
            </CardContent>
         </Card>
      </>
   )
}