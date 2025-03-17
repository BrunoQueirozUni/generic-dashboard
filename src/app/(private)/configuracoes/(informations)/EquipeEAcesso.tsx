"use client"

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TeamMember {
   id: number
   name: string
   email: string
   role: string
   avatar?: any
}

export function EquipeEAcesso() {
   const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
      { id: 1, name: "John Doe", email: "johndoe@alterra.admin.corps", role: "Admin", avatar: "https://sm.ign.com/t/ign_br/screenshot/default/chiefman_nr9y.1200.jpg" },
      { id: 2, name: "Jane Doe", email: "janedoe@alterra.software.corps", role: "Developer", avatar: "" },
      { id: 3, name: "John Warhammer", email: "allthe40khammers@40k.com", role: "Emperor", avatar: "https://i1.sndcdn.com/avatars-000346814522-tyftbq-t1080x1080.jpg" },
   ])

   const [showInviteForm, setShowInviteForm] = useState(false)
   const [newMember, setNewMember] = useState({ email: "", role: "viewer" })

   const handleInvite = () => {
      // Simulação de adição de novo membro
      if (newMember.email) {
         const id = teamMembers.length + 1
         const name = newMember.email.split("@")[0]
         setTeamMembers([...teamMembers, { id, name, ...newMember }])
         setNewMember({ email: "", role: "viewer" })
         setShowInviteForm(false)
      }
   }

   const handleRemoveMember = (id: number) => {
      setTeamMembers(teamMembers.filter((member) => member.id !== id))
   }

   return (
      <>
         <Card className="px-6">
            <CardTitle className="px-0 pt-6 pb-1">Equipe e Acessos</CardTitle>
            <CardDescription>Gerencie os membros da sua equipe e suas permissões</CardDescription>
            <CardContent>
               <div className="pt-6">
                  <div className="flex items-center justify-between gap-4">
                     <h3 className="text-lg font-medium">Membros da Equipe:</h3>
                     <Button variant="white" onClick={() => setShowInviteForm(true)}>Convidar Membro</Button>
                  </div>
                  {showInviteForm && (
                     <div className="bg-gray-800/40 p-4 rounded-md space-y-4 mt-4">
                        <h4 className="font-medium">Convidar Novo Membro</h4>
                        <div className="flex space-x-4">
                           <Input
                              placeholder="Email"
                              value={newMember.email}
                              onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                              className="flex-grow"
                           />
                           <Select value={newMember.role} onValueChange={(value) => setNewMember({ ...newMember, role: value })}>
                              <SelectTrigger className="w-[180px]">
                                 <SelectValue placeholder="Selecione o papel" />
                              </SelectTrigger>
                              <SelectContent>
                                 <SelectItem value="admin">Administrador</SelectItem>
                                 <SelectItem value="developer">Desenvolvedor</SelectItem>
                                 <SelectItem value="viewer">Visualizador</SelectItem>
                              </SelectContent>
                           </Select>
                        </div>
                        <div className="flex space-x-2">
                           <Button variant="white" onClick={handleInvite}>Enviar Convite</Button>
                           <Button variant="gray" onClick={() => setShowInviteForm(false)}>
                              Cancelar
                           </Button>
                        </div>
                     </div>
                  )}
               </div>
               <div className="space-y-4 pt-6">
                  {teamMembers.map((member) => (
                     <div key={member.id} className="flex items-center justify-between p-4 border border-gray-700/80 rounded-md">
                        <div className="flex items-center space-x-6">
                           <Avatar className="size-[45px] select-none items-center justify-center overflow-hidden rounded-full">
                              <AvatarImage className="size-full object-cover" src={member.avatar} alt={member.name} />
                              <AvatarFallback className="flex size-full items-center justify-center bg-gray-600 font-medium">{member.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                           </Avatar>
                           <div>
                              <p className="font-medium">{member.name}</p>
                              <p className="text-sm text-gray-500">{member.email}</p>
                           </div>
                        </div>
                        <div className="flex items-center space-x-4">
                           <Badge
                              variant={
                                 member.role === "Admin" ? "adm" : member.role === "Developer" ? "dev" : member.role === "Visualizador" ? "visitor" : "visitor"
                              }
                           >
                              {
                                 member.role === "Admin"
                                    ? "Administrador"
                                    : member.role === "Developer"
                                       ? "Desenvolvedor"
                                       : "Visualizador"
                              }
                           </Badge>
                           <Button variant="gray" size="sm" onClick={() => handleRemoveMember(member.id)}>
                              Remover
                           </Button>
                        </div>
                     </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </>
   )
}