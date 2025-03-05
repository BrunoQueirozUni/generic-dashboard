import * as Tabs from "@radix-ui/react-tabs";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CreditCard, CurrencyBtc, PixLogo } from "@phosphor-icons/react";

export function MetodoDePagamentoTabs() {
   return (
      <form>
         <Tabs.Root defaultValue="Tab">
            <Tabs.List className="flex gap-4">
               <Tabs.Trigger value="PIX" asChild>
                  <Button title="PIX" variant="gray" className="p-3 data-[state=active]:bg-gray-500">
                     <PixLogo className="!w-6 !h-5" />
                  </Button>
               </Tabs.Trigger>
               <Tabs.Trigger value="Cartão" asChild>
                  <Button title="Cartão de Crédito" variant="gray" className="p-3 data-[state=active]:bg-gray-500">
                     <CreditCard className="!w-6 !h-5" />
                  </Button>
               </Tabs.Trigger>
               <Tabs.Trigger value="Crypto" asChild>
                  <Button title="Crypto" variant="gray" className="p-3 data-[state=active]:bg-gray-500">
                     <CurrencyBtc className="!w-6 !h-5" />
                  </Button>
               </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="PIX" className="py-6">
               <Label>Informe a chave PIX</Label>
               <Input type="text" placeholder="Chave PIX" className="mt-2" />
            </Tabs.Content>
            <Tabs.Content value="Cartão" className="py-6">
               <div>
                  <RadioGroup.Root defaultValue="CreditCard" className="flex gap-5 pb-4">
                     <div className="flex items-center gap-2">
                        <RadioGroup.Item
                           value="CreditCard"
                           id="CreditCard"
                           className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center 
                          hover:border-primary transition focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                           <RadioGroup.Indicator className="w-2 h-2 bg-primary rounded-full" />
                        </RadioGroup.Item>
                        <Label htmlFor="CreditCard" className="text-gray-300 cursor-pointer hover:text-white">
                           Crédito
                        </Label>
                     </div>
                     <div className="flex items-center gap-2">
                        <RadioGroup.Item
                           value="DebitCard"
                           id="DebitCard"
                           className="w-5 h-5 border-2 border-gray-400 rounded-full flex items-center justify-center 
                          hover:border-primary transition focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                           <RadioGroup.Indicator className="w-2 h-2 bg-primary rounded-full" />
                        </RadioGroup.Item>
                        <Label htmlFor="DebitCard" className="text-gray-300 cursor-pointer hover:text-white">
                           Débito
                        </Label>
                     </div>
                  </RadioGroup.Root>
               </div>
               <Label>Número do Cartão</Label>
               <Input type="text" placeholder="Número do Cartão" className="mt-2" />
               <div className="flex w-full gap-4 my-2">
                  <div className="flex-1">
                     <Label>Validade</Label>
                     <Input type="date" className="mt-2 flex-1" />
                  </div>
                  <div className="flex-1">
                     <Label>Código de Segurança</Label>
                     <div className="flex items-center">
                        <Input type="text" placeholder="CVV" className="mt-2 border-r-0 rounded-r-none" />
                        <ShieldQuestion className="flex h-10 w-10 p-1 mt-2 rounded-md border rounded-l-none" />
                     </div>
                  </div>
               </div>
               <Label>Nome do Titular</Label>
               <Input type="text" placeholder="Nome do Titular" className="mt-2" />
            </Tabs.Content>
         </Tabs.Root>
      </form>
   )
}