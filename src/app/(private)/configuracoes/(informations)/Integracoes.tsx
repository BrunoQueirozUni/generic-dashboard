"use client"

import * as Switch from "@radix-ui/react-switch";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

// Componente alert
import { useAlert } from "@/components/Alert";

interface Integration {
   id: string
   name: string
   description: string
   enabled: boolean
   configured: boolean
}

export function Integracoes() {

   const { showAlert } = useAlert();

   const [integrations, setIntegrations] = useState<Integration[]>([
      {
         id: "webhook",
         name: "Webhooks",
         description: "Receba notificações em tempo real sobre eventos da API",
         enabled: true,
         configured: true,
      },
      {
         id: "slack",
         name: "Slack",
         description: "Envie alertas e notificações para canais do Slack",
         enabled: false,
         configured: false,
      },
      {
         id: "zapier",
         name: "Zapier",
         description: "Conecte sua API a milhares de aplicativos através do Zapier",
         enabled: false,
         configured: false,
      },
   ])

   const [activeConfig, setActiveConfig] = useState<string | null>(null)
   const [webhookUrl, setWebhookUrl] = useState("https://exemplo.com/webhook")
   const [slackWebhook, setSlackWebhook] = useState("")

   const toggleIntegration = (id: string) => {
      setIntegrations(
         integrations.map((integration) =>
            integration.id === id ? { ...integration, enabled: !integration.enabled } : integration,
         ),
      )
   }

   const configureIntegration = (id: string) => {
      setActiveConfig(id)
   }

   const saveConfiguration = () => {
      if (activeConfig) {
         setIntegrations(
            integrations.map((integration) =>
               integration.id === activeConfig ? { ...integration, configured: true } : integration,
            ),
         )
         setActiveConfig(null)
         showAlert("success")
      }
   }

   return (
      <>
         <Card className="px-6">
            <CardTitle className="px-0 pt-6 pb-1">Integrações</CardTitle>
            <CardDescription>Conecte sua API a serviços externos</CardDescription>
            <CardContent>
               <div className="space-y-6 pt-6">
                  {integrations.map((integration) => (
                     <div key={integration.id} className="border border-gray-700 rounded-md p-4">
                        <div className="flex items-center justify-between">
                           <div>
                              <h3 className="font-medium">{integration.name}</h3>
                              <p className="text-sm text-gray-500">{integration.description}</p>
                           </div>
                           <div className="flex items-center space-x-4">
                              <Switch.Root
                                 id={`toggle-${integration.id}`}
                                 checked={integration.enabled}
                                 onCheckedChange={() => toggleIntegration(integration.id)}
                                 className="relative w-12 h-6 bg-gray-500 rounded-full transition data-[state=checked]:bg-primary focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">

                                 <Switch.Thumb className="block w-4 h-4 bg-white rounded-full transition-transform transform translate-x-1 data-[state=checked]:translate-x-7" />

                              </Switch.Root>
                              <Button variant="gray" size="sm" onClick={() => configureIntegration(integration.id)}>
                                 {integration.configured ? "Configurar" : "Configurar"}
                              </Button>
                           </div>
                        </div>

                        {activeConfig === integration.id && (
                           <div className="mt-4 space-y-4 border-t border-t-gray-700 pt-4">
                              {integration.id === "webhook" && (
                                 <div className="space-y-2">
                                    <Label htmlFor="webhook-url">URL do Webhook</Label>
                                    <Input id="webhook-url" value={webhookUrl} onChange={(e) => setWebhookUrl(e.target.value)} />
                                 </div>
                              )}

                              {integration.id === "slack" && (
                                 <div className="space-y-2">
                                    <Label htmlFor="slack-webhook">URL do Webhook do Slack</Label>
                                    <Input
                                       id="slack-webhook"
                                       value={slackWebhook}
                                       onChange={(e) => setSlackWebhook(e.target.value)}
                                    />
                                 </div>
                              )}

                              {integration.id === "zapier" && (
                                 <div className="space-y-2">
                                    <p className="text-sm">
                                       Para configurar o Zapier, crie um Zap que use nossa API como trigger ou action.
                                    </p>
                                    <p className="text-sm font-medium">API Key para o Zapier:</p>
                                    <div className="flex">
                                       <Input value="zap_1234567890abcdef" readOnly />
                                       <Button variant="gray" className="ml-2">
                                          Copiar
                                       </Button>
                                    </div>
                                 </div>
                              )}

                              <div className="flex space-x-2">
                                 <Button variant="white" onClick={saveConfiguration}>Salvar</Button>
                                 <Button variant="gray" onClick={() => setActiveConfig(null)}>
                                    Cancelar
                                 </Button>
                              </div>
                           </div>
                        )}
                     </div>
                  ))}
               </div>
            </CardContent>
         </Card>
      </>
   )
}