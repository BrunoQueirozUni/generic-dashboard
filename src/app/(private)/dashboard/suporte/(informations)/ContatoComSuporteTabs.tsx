"use client";

import * as Tabs from "@radix-ui/react-tabs";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Animation } from "@/components/ui/animation";
import {
  Chat,
  EnvelopeSimple,
  Envelope,
  CheckCircle,
} from "@phosphor-icons/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TabsDesign = {
  tabsDesign:
    "flex items-center justify-center gap-3 hover:bg-gray-950 data-[state=active]:bg-gray-950 cursor-pointer py-1 rounded-sm flex-1",
};

export function ContatoComSuporteTabs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [priority, setPriority] = useState("medium");
  const [ticketSubmitted, setTicketSubmitted] = useState(false);

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //Simulação de envio
    console.log({ name, email, subject, message, priority });
    setTicketSubmitted(true);

    setTimeout(() => {
      setName("");
      setEmail("");
      setSubject("");
      setPriority("medium");
      setMessage("");
      setTicketSubmitted(false);
    }, 10000);
  };

  return (
    <Tabs.Root defaultValue="ticket" className="w-full">
      <Tabs.List className="pb-8">
        <div className="w-full bg-gray-700/50 rounded-sm py-1 px-1 flex gap-2 text-white">
          <Tabs.Trigger className={TabsDesign.tabsDesign} value="ticket">
            <EnvelopeSimple size={23} />
            Ticket
          </Tabs.Trigger>
          <Tabs.Trigger className={TabsDesign.tabsDesign} value="chat">
            <Chat size={23} />
            Chat
          </Tabs.Trigger>
          <Tabs.Trigger className={TabsDesign.tabsDesign} value="email">
            <Envelope size={23} />
            E-mail
          </Tabs.Trigger>
        </div>
      </Tabs.List>

      <Tabs.Content value="ticket">
        {ticketSubmitted ? (
          <div className="flex items-center gap-2 rounded-md bg-green-50 p-4 px-8 dark:bg-green-900/20 text-green-800 dark:text-green-200">
            <CheckCircle weight="fill" size={22} />
            <p className="text-sm font-medium">
              Ticket enviado com sucesso! Nossa equipe entrará em contato em
              breve.
            </p>
          </div>
        ) : (
          <form onSubmit={handleTicketSubmit} className="outiline-none">
            <Animation>
              <div className="flex-1 grid grid-cols-2 gap-3">
                <Label htmlFor="name">Nome</Label>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Digite o seu nome"
                />
                <Input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  placeholder="Digite seu email"
                />
              </div>
              <div className="flex-1 flex gap-3">
                <div className="flex-1">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    placeholder="Digite o assunto"
                    className="mt-3"
                  />
                </div>
                <div>
                  <Label htmlFor="priority">Prioridade</Label>
                  <Select
                    value={priority}
                    onValueChange={setPriority}
                    defaultValue="baixa"
                  >
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
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={8}
                  className="flex-1 mt-3"
                />
              </div>
              <div>
                <Button type="submit" variant="white">
                  Enviar Ticket
                </Button>
              </div>
            </Animation>
          </form>
        )}
      </Tabs.Content>

      <Tabs.Content
        value="chat"
        className="pt-4 border border-gray-700 rounded-md"
      >
        <Animation className="flex flex-col items-center justify-center space-y-4 py-6 gap-0">
          <Chat size={75} className="text-gray-500" />
          <div className="text-center">
            <h3 className="text-lg font-medium">Chat com Suporte</h3>
            <p className="text-sm text-gray-400">
              Nossos agentes estão disponíveis para chat em tempo real de
              segunda a sexta, das 9h às 18h.
            </p>
          </div>
          <Button variant="white">Iniciar Chat</Button>
        </Animation>
      </Tabs.Content>

      <Tabs.Content
        value="email"
        className="pt-4 border border-gray-700 rounded-md"
      >
        <Animation className="flex flex-col items-center justify-center space-y-4 py-6 gap-0">
          <Envelope size={75} className="text-gray-500" />
          <div className="text-center">
            <h3 className="text-lg font-medium">Suporte por E-mail</h3>
            <p className="text-sm text-gray-400">
              Envie um e-mail para nossa equipe de suporte e receba uma resposta
              em até 24 horas.
            </p>
            <p className="mt-2 text-lg">suporte@dashborad.com</p>
            <p className="text-sm text-gray-400">
              Disponível 24/7, com tempo de resposta de até 24 horas úteis.
            </p>
          </div>
        </Animation>
      </Tabs.Content>
    </Tabs.Root>
  );
}
