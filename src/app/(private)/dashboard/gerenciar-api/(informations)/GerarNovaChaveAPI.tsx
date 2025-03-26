import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";

// Componente alert
import { useAlert } from "@/components/Alert";

export function GerarNovaChaveAPI() {

   const { showAlert } = useAlert();

   const [apiKey, setApiKey] = useState("")

   const generateApiKey = () => {
     // Simula a geração de uma chave de API
     const newKey = "alterra_" + Math.random().toString(36).substr(2, 9)
     setApiKey(newKey)

     showAlert("chave")
   }

   return (
      <>
         <Card className="flex-1">
            <CardTitle>Gerar nova Chave API</CardTitle>
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