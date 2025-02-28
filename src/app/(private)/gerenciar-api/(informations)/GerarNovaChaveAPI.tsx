import { useState } from "react";
import { Card } from "@/components/ui/card";
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
         <Card className="px-5 flex-1">
            <h1 className="text-2xl py-5">Gerar nova Chave API</h1>
            <div className="pb-5">
               <Label>
                  Chave da API
               </Label>
               <Input id="api-key" value={apiKey} readOnly className="mt-2" />
            </div>
            <div className="pb-5">
               <Button onClick={generateApiKey} variant="white">
                  Gerar Nova Chave
               </Button>
            </div>
         </Card>
      </>
   )
}