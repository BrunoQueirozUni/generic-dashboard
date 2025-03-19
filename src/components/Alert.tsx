"use client"

import { CheckCircle, SealCheck, ShieldCheck, UserCheck, UserMinus, Warning, WarningCircle, XCircle } from "@phosphor-icons/react";
import * as Toast from "@radix-ui/react-toast";
import { useState, useEffect, act, use } from "react";

export default function Alert() {
   const [open, setOpen] = useState(false);
   const [type, setType] = useState<"success" | "error" | "warning" | "alteracao" | "userRemove" | "activated" | "userAdded">("success");
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

   const toastStyles = {
      // Padrões
      success: "border-green-500/30 dark:text-green-200 bg-gradient-to-r from-green-700/30 to-transparent to-80%",
      alteracao: "border-blue-500/30 dark:text-blue-200 bg-gradient-to-r from-blue-700/30 to-transparent to-80%",
      error: "border-red-500/30 dark:text-red-200 bg-gradient-to-r from-red-700/30 to-transparent to-80%",
      warning: "border-yellow-500/30 dark:text-yellow-200 bg-gradient-to-r from-yellow-700/30 to-transparent to-80%",

      // Personalizados
      activated: "border-fuchsia-500/30 dark:text-fuchsia-200 bg-gradient-to-r from-fuchsia-700/30 to-transparent to-80%",
      userRemove: "border-orange-500/30 dark:text-orange-200 bg-gradient-to-r from-orange-700/30 to-transparent to-80%",
      userAdded: "border-emerald-500/30 dark:text-emerald-200 bg-gradient-to-r from-emerald-700/30 to-transparent to-80%",
   };

   const icons = {
      success: <SealCheck size={35} />,
      alteracao: <CheckCircle size={35} />,
      error: <XCircle size={35} />,
      warning: <Warning size={35} />,

      // Personalizados
      activated: <ShieldCheck size={35} />,
      userRemove: <UserMinus size={35} />,
      userAdded: <UserCheck size={35} />,
   };

   const messages = {
      success: { title: "Sucesso!", message: "O salvamento foi concluído" },
      alteracao: { title: "Alterado!", message: "Todas as alterações foram salvas" },
      error: { title: "Erro!", message: "Ocorreu algum erro inesperado" },
      warning: { title: "Atenção!", message: "Algo pode estar errado!" },

      // Personalizados
      activated: { title: "Autenticado!", message: "Autenticação ativada com sucesso!" },
      userRemove: { title: "Removido!", message: "Usuário removido com sucesso!" },
      userAdded: { title: "Adicionado!", message: "Usuário adicionado com sucesso!" },
   };

   return (
      <>
         {/*  === botões de teste ===
         <div className="flex flex-col items-center gap-2">
            <button
               onClick={() => { setType("success"); setOpen(true); }}
               className="px-4 py-2 bg-green-700 text-white rounded-lg"
            >
               Success
            </button>
            <button
               onClick={() => { setType("error"); setOpen(true); }}
               className="px-4 py-2 bg-red-700 text-white rounded-lg"
            >
               Error
            </button>
            <button
               onClick={() => { setType("warning"); setOpen(true); }}
               className="px-4 py-2 bg-yellow-700 text-white rounded-lg"
            >
               Warning
            </button>
            <button
               onClick={() => { setType("userRemove"); setOpen(true); }}
               className="px-4 py-2 bg-blue-700 text-white rounded-lg"
            >
               usuario removido
            </button>
            <button
               onClick={() => { setType("userAdded"); setOpen(true); }}
               className="px-4 py-2 bg-purple-700 text-white rounded-lg"
            >
               ativado
            </button>
            <button
               onClick={() => { setType("alteracao"); setOpen(true); }}
               className="px-4 py-2 bg-blue-700 text-white rounded-lg"
            >
               alterado
            </button>
            <button
               onClick={() => { setType("activated"); setOpen(true); }}
               className="px-4 py-2 bg-blue-700 text-white rounded-lg"
            >
               ativado
            </button>
            */}

         <Toast.Provider swipeDirection="right">
            <Toast.Root
               open={open}
               onOpenChange={setOpen}
               className="bg-gray-900 min-w-[300px] overflow-hidden relative text-white border-2 mr-2 shadow-lg rounded-2x animate-slide">
               <div className="flex items-center gap-4 p-3 pl-5">
                  <div>
                     {icons[type]}
                  </div>
                  <div>
                     <Toast.Title className="font-bold">
                        {messages[type].title}
                     </Toast.Title>
                     <Toast.Description className="text-sm">{messages[type].message}</Toast.Description>
                  </div>
               </div>
               <div className="w-full">
                  <div
                     className="w-full h-1 absolute bottom-0 z-0 bg-blue-500 transition-all"
                     style={{ width: `${progress}%` }}
                  />
               </div>
            </Toast.Root>
            <Toast.Viewport className="fixed bottom-4 right-4 flex flex-col gap-2 min-w-[420px]" />
         </Toast.Provider>
      </>
   );
}
