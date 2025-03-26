import * as Tabs from "@radix-ui/react-tabs";

import { Seguranca } from "./(PerfilUsuario)/Seguranca";
import { ConfiguracaoDeNotificacoes } from "./ConfiguracaoDeNotificacoes";
import { InformacoesPessoais } from "./(PerfilUsuario)/InformacoesPessoais";
import { AutenticacaoDeDoisFatores } from "./(PerfilUsuario)/AutenticacaoDeDoisFatores";
import { EquipeEAcesso } from "./EquipeEAcesso";
import { Integracoes } from "./Integracoes";

export function ConfiguracaoTabs() {

   return (
      <>
         <Tabs.Root defaultValue="perfil" className="w-full">
            <Tabs.List className="inline-flex">
               <div className="bg-zinc-700/50 rounded-md py-1 px-1 flex gap-2 text-white">
                  <Tabs.Trigger className="hover:bg-black data-[state=active]:bg-black cursor-pointer px-3 py-2 rounded-md" value="perfil">Perfil do Usuário</Tabs.Trigger>
                  <Tabs.Trigger className="hover:bg-black data-[state=active]:bg-black cursor-pointer px-3 py-2 rounded-md" value="notificacoes">Notificações</Tabs.Trigger>
                  <Tabs.Trigger className="hover:bg-black data-[state=active]:bg-black cursor-pointer px-3 py-2 rounded-md" value="equipe">Equipe e Acessos</Tabs.Trigger>
                  <Tabs.Trigger className="hover:bg-black data-[state=active]:bg-black cursor-pointer px-3 py-2 rounded-md" value="integracao">Integrações</Tabs.Trigger>
               </div>
            </Tabs.List>
            <Tabs.Content value="perfil" className="flex w-full gap-8 justify-between">
               <InformacoesPessoais />
               <div>
                  <Seguranca />
                  <AutenticacaoDeDoisFatores />
               </div>
            </Tabs.Content>
            <Tabs.Content value="notificacoes" className="flex">
               <ConfiguracaoDeNotificacoes />
            </Tabs.Content>
            <Tabs.Content value="equipe">
               <EquipeEAcesso />
            </Tabs.Content>
            <Tabs.Content value="integracao">
               <Integracoes />
            </Tabs.Content>
         </Tabs.Root>
      </>
   )
}