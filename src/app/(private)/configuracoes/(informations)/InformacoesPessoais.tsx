"use client"

//import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatars } from "./(components)/Avatars";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export function InformacoesPessoais() {

   return (
      <>
         <Card className="px-6">
            <CardTitle className="px-0 pt-6 pb-1">Informações Pessoais</CardTitle>
            <CardDescription className="text-sm text-gray-500">Atualize suas informações pessoais</CardDescription>
            <CardContent>
               {/* Formulario */}
               <div>
                  <div className="pt-6 flex flex-col gap-6">
                     <div className="flex gap-6 items-center">
                        {/* Avatar */}
                        <Avatars src="https://cdn.pixabay.com/photo/2020/03/31/23/27/rome-4989538_1280.jpg" />
                        <div className="flex-1">
                           <Label>Nome Completo</Label>
                           <Input placeholder="Nome exemplo" className="mt-1" />
                        </div>
                     </div>
                     <div className="flex flex-col gap-4">
                        <div>
                           <Label>Email</Label>
                           <Input placeholder="usuario@exemplo.com" className="mt-1" />
                        </div>
                        <div>
                           <Label>Telenfone</Label>
                           <Input placeholder="(00) 00000-0000" className="mt-1" />
                        </div>
                        <div>
                           <Label>Empresa</Label>
                           <Input placeholder="Nome Exemplo" className="mt-1" />
                        </div>
                     </div>
                  </div>
                  <Button variant="white" className="mt-6">Salver Alterações</Button>
               </div>
            </CardContent>
         </Card>
      </>
   )
}