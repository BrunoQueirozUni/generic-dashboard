import { useState } from "react";
import { Card, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function GerarNovaChaveAPI() {
   const [apiKey, setApiKey] = useState("")

   const generateApiKey = () => {
     // Simula a geração de uma chave de API
     const newKey = "alterra_" + Math.random().toString(36).substr(2, 9)
     setApiKey(newKey)
   }

   return (
      <>
         <Card className="px-6 flex-1">
            <CardTitle className="py-6 px-0">Gerar nova Chave API</CardTitle>
            <div className="pb-6">
               <Label>
                  Chave da API
               </Label>
               <Input id="api-key" value={apiKey} readOnly className="mt-2" />
            </div>
            <div className="pb-6">
               <Button onClick={generateApiKey} variant="white">
                  Gerar Nova Chave
               </Button>
            </div>
         </Card>
      </>
   )
}