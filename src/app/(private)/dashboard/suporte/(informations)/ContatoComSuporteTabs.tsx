import * as Tabs from "@radix-ui/react-tabs";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Chat, EnvelopeSimple, Phone, PhoneCall } from "@phosphor-icons/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function ContatoComSuporteTabs() {
   return (
      <Tabs.Root defaultValue="ticket" className="w-full">
         <Tabs.List className="inline-flex w-full pb-8">
            <div className="w-full bg-gray-700/50 rounded-sm py-1 px-1 flex gap-2 text-white">
               <Tabs.Trigger className="flex items-center justify-center gap-3 hover:bg-gray-950 data-[state=active]:bg-gray-950 cursor-pointer py-1 rounded-sm flex-1" value="ticket">
                  <EnvelopeSimple size={23} />
                  Ticket
               </Tabs.Trigger>
               <Tabs.Trigger className="flex items-center justify-center gap-3 hover:bg-gray-950 data-[state=active]:bg-gray-950 cursor-pointer py-1 rounded-sm flex-1" value="chat">
                  <Chat size={23} />
                  Chat
               </Tabs.Trigger>
               <Tabs.Trigger className="flex items-center justify-center gap-3 hover:bg-gray-950 data-[state=active]:bg-gray-950 cursor-pointer py-1 rounded-sm flex-1" value="telefone">
                  <Phone size={23} />
                  Telefone
               </Tabs.Trigger>
            </div>
         </Tabs.List>

         <Tabs.Content value="ticket" asChild>
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 20 }}
               transition={{ duration: 0.3 }}
               className="flex flex-col gap-6"
            >
               <div className="flex-1 grid grid-cols-2 gap-3">
                  <Label>Nome</Label>
                  <Label>Email</Label>
                  <Input type="text" placeholder="Digite o seu nome" />
                  <Input type="text" placeholder="Digite seu email" />
               </div>
               <div className="flex-1 flex gap-3">
                  <div className="flex-1">
                     <Label>Assunto</Label>
                     <Input className="mt-3" type="text" placeholder="Digite o assunto" />
                  </div>
                  <div>
                     <Label>Prioridade</Label>
                     <Select>
                        <SelectTrigger className="w-[380px] mt-3">
                           <SelectValue placeholder="Selecione a prioridade" />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="Baixa">Baixa</SelectItem>
                           <SelectItem value="Media">Média</SelectItem>
                           <SelectItem value="Alta">Alta</SelectItem>
                           <SelectItem value="Crítica">Crítica</SelectItem>
                        </SelectContent>
                     </Select>
                  </div>
               </div>
               <div>
                  <Label>Mensagem</Label>
                  <Textarea className="flex-1 mt-3" rows={8} />
               </div>
               <div>
                  <Button variant="white">Enviar Ticket</Button>
               </div>
            </motion.div>
         </Tabs.Content>

         <Tabs.Content value="chat" asChild>
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 20 }}
               transition={{ duration: 0.3 }}
               className="flex flex-col items-center gap-5 rounded-md border border-gray-700 p-8"
            >
               <Chat size={75} className="text-gray-500" />
               <div className="text-center">
                  <h1 className="text-2xl">Chat com Suporte</h1>
                  <p className="text-gray-400">Nossos agentes estão disponíveis para chat em tempo real de segunda a sexta, das 9h às 18h.</p>
               </div>
               <div>
                  <Button variant="white">Iniciar Chat</Button>
               </div>
            </motion.div>
         </Tabs.Content>

         <Tabs.Content value="telefone" asChild>
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: 20 }}
               transition={{ duration: 0.3 }}
               className="flex flex-col items-center gap-5 rounded-md border border-gray-700 p-8 text-center"
            >
               <PhoneCall size={75} className="text-gray-500" />
               <div>
                  <h1 className="text-2xl">Suporte por telefone</h1>
                  <p className="text-gray-400">Entre em contato com nossa equipe de suporte por telefone.</p>
               </div>
               <div>
                  <h1 className="text-2xl">+55 (99) 99999-9999 </h1>
                  <p className="text-gray-400">Entre em contato com nossa equipe de suporte por telefone.</p>
               </div>
            </motion.div>
         </Tabs.Content>

      </Tabs.Root>
   );
}
