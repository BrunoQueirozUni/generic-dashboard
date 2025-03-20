"use client";

import * as Toast from "@radix-ui/react-toast";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { CheckCircle, CheckSquare, Coins, Download, Funnel, Key, Mailbox, Recycle, SealCheck, ShieldCheck, Trash, UserCheck, UserMinus, Warning, XCircle } from "@phosphor-icons/react";

// Definindo os tipos
type AlertType = "success" | "error" | "warning" | "alteracao" | "userRemove" | "activated" | "userAdded" | "userInvited" | "filter" | "download" | "item" | "itemRemoved" | "payment" | "chave" | "renovarChave";

interface AlertContextProps {
   showAlert: (type: AlertType) => void;
}

// Criando o contexto
const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export function AlertProvider({ children }: { children: ReactNode }) {
   const [open, setOpen] = useState(false);
   const [type, setType] = useState<AlertType>("success");
   const [progress, setProgress] = useState(100);
   const duration = 4000;

   useEffect(() => {
      if (open) {
         setProgress(100);
         const interval = setInterval(() => {
            setProgress((prev) => Math.max(prev - 100 / (duration / 100), 0));
         }, 100);
         setTimeout(() => {
            setOpen(false);
            clearInterval(interval);
         }, duration);
         return () => clearInterval(interval);
      }
   }, [open]);

   const showAlert = (alertType: AlertType) => {
      setType(alertType);
      setOpen(true);
   };

   const toastStyles = {
      success: "border-green-500/30 dark:text-green-200 bg-gradient-to-r from-green-700/30 to-transparent to-80%",
      alteracao: "border-blue-500/30 dark:text-blue-200 bg-gradient-to-r from-blue-700/30 to-transparent to-80%",
      error: "border-red-500/30 dark:text-red-200 bg-gradient-to-r from-red-700/30 to-transparent to-80%",
      warning: "border-yellow-500/30 dark:text-yellow-200 bg-gradient-to-r from-yellow-700/30 to-transparent to-80%",

      // Especiais
      userRemove: "border-orange-500/30 dark:text-orange-200 bg-gradient-to-r from-orange-700/30 to-transparent to-80%",
      userAdded: "border-emerald-500/30 dark:text-emerald-200 bg-gradient-to-r from-emerald-700/30 to-transparent to-80%",
      userInvited: "border-cyan-500/30 dark:text-cyan-200 bg-gradient-to-r from-cyan-700/30 to-transparent to-80%",
      
      item: "border-gray-500/30 dark:text-gray-200 bg-gradient-to-r from-gray-700/30 to-transparent to-80%",
      itemRemoved: "border-red-500/30 dark:text-red-200 bg-gradient-to-r from-red-700/30 to-transparent to-80%",

      activated: "border-fuchsia-500/30 dark:text-fuchsia-200 bg-gradient-to-r from-fuchsia-700/30 to-transparent to-80%",
      filter: "border-gray-500/30 dark:text-gray-200 bg-gradient-to-r from-gray-700/30 to-transparent to-80%",
      download: "border-teal-500/30 dark:text-teal-200 bg-gradient-to-r from-teal-700/30 to-transparent to-80%",
      payment: "border-lime-500/30 dark:text-lime-200 bg-gradient-to-r from-lime-700/30 to-transparent to-80%",
      
      chave: "border-purple-500/30 dark:text-purple-200 bg-gradient-to-r from-purple-700/30 to-transparent to-80%",
      renovarChave: "border-purple-500/30 dark:text-purple-200 bg-gradient-to-r from-purple-700/30 to-transparent to-80%",
   };

   const icons = {
      success: <SealCheck size={35} />,
      alteracao: <CheckCircle size={35} />,
      error: <XCircle size={35} />,
      warning: <Warning size={35} />,

      // Especiais
      userRemove: <UserMinus size={35} />,
      userAdded: <UserCheck size={35} />,
      userInvited: <Mailbox size={35} />,
      
      item: <CheckSquare size={35} />,
      itemRemoved:<Trash size={35} />,

      activated: <ShieldCheck size={35} />,
      filter: <Funnel size={28} />,
      download: <Download size={35} />,
      payment: <Coins size={35} />,

      chave: <Key size={35} />,
      renovarChave: <Recycle size={35} />,
   };

   const messages = {
      success: { title: "Sucesso!", message: "O salvamento foi concluído" },
      alteracao: { title: "Alterado!", message: "Todas as alterações foram salvas" },
      error: { title: "Erro!", message: "Ocorreu algum erro inesperado" },
      warning: { title: "Atenção!", message: "Algo pode estar errado!" },

      // Especiais
      userRemove: { title: "Removido!", message: "Usuário removido com sucesso!" },
      userAdded: { title: "Adicionado!", message: "Usuário adicionado com sucesso!" },
      userInvited: { title: "Convidado!", message: "O convite foi enviado, aguardando resposta" },
      
      item: { title: "Item Adicionado!", message: "Item adicionado com sucesso!" },
      itemRemoved: { title: "Removido!", message: "Item removido com sucesso!" },
      
      activated: { title: "Autenticado!", message: "Autenticação ativada com sucesso!" },
      filter: { title: "Filtrado!", message: "Filtro aplicado com sucesso!" },
      download: { title: "Baixando!", message: "Um download foi iniciado" },
      payment: { title: "Novo Método!", message: "Novo método de pagamento adicionado!" },

      chave: { title: "Chave Gerada!", message: "Nova chave gerada com sucesso!" },
      renovarChave: { title: "Chave Renovada!", message: "Chave renovada com sucesso!" },
   };

   return (
      <AlertContext.Provider value={{ showAlert }}>
         {children}
         <Toast.Provider swipeDirection="up" >
            <Toast.Root
               open={open}
               onOpenChange={setOpen}
               className={`bg-gray-900 pointer-events-auto min-w-[300px] overflow-hidden relative text-white border-2 mr-2 shadow-lg rounded-2xl animate-slide ${toastStyles[type]}`}
            >
               <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                     <div className="flex items-center gap-4 p-3 pl-5">
                        <div>{icons[type]}</div>
                        <div>
                           <Toast.Title className="font-bold">{messages[type].title}</Toast.Title>
                           <Toast.Description className="text-sm">{messages[type].message}</Toast.Description>
                        </div>
                     </div>
                     <div className="w-full">
                        <div
                           className="w-full h-1 absolute bottom-0 z-0 bg-blue-500 transition-all"
                           style={{ width: `${progress}%` }}
                        />
                     </div>
                  </div>
                  <Toast.Close className="p-3 pr-8 pl-8 h-full cursor-pointer hover:text-gray-300">
                     <XCircle size={24} weight="fill" />
                  </Toast.Close>
               </div>
            </Toast.Root>
            <Toast.Viewport className="fixed top-16 bottom-4 right-4 flex flex-col gap-2 min-w-[420px] pointer-events-none" />
         </Toast.Provider>
      </AlertContext.Provider>
   );
}

// Hook para usar o contexto
export function useAlert() {
   const context = useContext(AlertContext);
   if (!context) {
      throw new Error("useAlert deve ser usado dentro de um AlertProvider");
   }
   return context;
}
