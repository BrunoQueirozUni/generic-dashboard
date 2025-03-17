import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export function Seguranca() {
   return (
      <>
         <Card className="px-6">
            <CardTitle className="px-0 pt-6 pb-1">Segurança</CardTitle>
            <CardDescription>Gerencie sua senha e autenticação de dois fatores</CardDescription>
            <CardContent className="pt-6">
               <div className="flex flex-col gap-4">
                  <div>
                     <Label>Senha Atual</Label>
                     <Input placeholder="Sua senha atual" className="mt-1" />
                  </div>
                  <div>
                     <Label>Nova Senha</Label>
                     <Input placeholder="Sua nova senha" className="mt-1" />
                  </div>
                  <div>
                     <Label>Confirmar nova senha</Label>
                     <Input placeholder="Confirme sua nova senha" className="mt-1" />
                  </div>
               </div>
               <Button variant="white" className="mt-6">Atualizar senha</Button>
            </CardContent>
         </Card>
      </>
   )
}