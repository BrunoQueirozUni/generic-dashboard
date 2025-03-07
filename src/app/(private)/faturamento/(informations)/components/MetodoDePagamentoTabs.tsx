import * as Tabs from "@radix-ui/react-tabs";
import * as HoverCard from "@radix-ui/react-hover-card";
import * as RadioGroup from "@radix-ui/react-radio-group";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CreditCard, CurrencyBtc, PixLogo, Question } from "@phosphor-icons/react";

// Imagens
import cartao from "@/../public/imgs/cartao.png"
import Image from "next/image";

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
                        <div className="flex h-10 items-center px-2 mt-2 rounded-md border border-gray-600 rounded-l-none">
                           <HoverCard.Root openDelay={100} closeDelay={100}>
                              <HoverCard.Trigger asChild>
                                 <Question weight="light" className="h-7 w-7 text-gray-500" />
                              </HoverCard.Trigger>
                              <HoverCard.Portal>
                                 <HoverCard.Content
                                    className="w-[400px] rounded-lg bg-white p-4 shadow-lg border border-gray-200"
                                    sideOffset={5}
                                 >
                                    <h1 className="text-lg font-semibold text-gray-800">Código de Segurança</h1>
                                    <p className="text-gray-500 text-sm mb-3">
                                       Informe os números de segurança do seu cartão de crédito.
                                    </p>
                                    <div className="flex items-center gap-3">
                                       <Image src={cartao} alt="Verso do cartão" className="w-[150px] rounded-md shadow-sm border" />
                                       <div className="flex-1">
                                          <h2 className="text-md font-semibold text-gray-800">Onde Encontrar?</h2>
                                          <p className="text-gray-500 text-sm mt-1">
                                             São os três últimos números no verso do cartão.
                                          </p>
                                       </div>
                                    </div>
                                    <HoverCard.Arrow className="fill-white" />
                                 </HoverCard.Content>
                              </HoverCard.Portal>
                           </HoverCard.Root>
                        </div>
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