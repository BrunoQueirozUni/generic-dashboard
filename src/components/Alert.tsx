"use client"

import { CheckCircle, SealCheck, UserMinus, Warning, WarningCircle, XCircle } from '@phosphor-icons/react';
import * as Toast from '@radix-ui/react-toast';
import { useState, useEffect } from 'react';

export default function Alert() {
   const [open, setOpen] = useState(false);
   const [type, setType] = useState<'success' | 'error' | 'warning' | 'alteracao' | 'userRemove'>('success');
   const [progress, setProgress] = useState(100);
   const duration = 5000;

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
      success: "border-l-green-500 text-green-800 dark:text-green-200 bg-green-700/30",
      alteracao: "border-l-blue-500 text-blue-800 dark:text-blue-200 dark:bg-blue-700/20",
      error: "border-l-red-500 text-red-800 dark:text-red-200 dark:bg-red-700/20",
      warning: "border-l-yellow-500 text-yellow-800 dark:text-yellow-200 dark:bg-yellow-700/20",

      // Personalizados
      activated: "border-l-blue-500 text-blue-800 dark:text-blue-200 dark:bg-blue-700/20",
      userRemove: "border-l-orange-500 text-orange-800 dark:text-orange-200 dark:bg-orange-700/20",
   };

   const icons = {
      success: <SealCheck size={25} weight="fill" />,
      alteracao: <CheckCircle size={25} weight="fill" />,
      error: <XCircle size={25} weight="fill" />,
      warning: <Warning size={25} weight="fill" />,

      // Personalizados
      userRemove: <UserMinus size={25} weight="fill" />,
   };

   const messages = [
      { succes: "Sucesso!", successMessage: "O foi salvamento concluído"},
      { alteracao: "Alterado!", alteracaoMessage: "Todas as alterações foram salvas"},
      { error: "Error", errorMessage: "Ocorreu algum erro inesperado"},
      { warning: "Atenção!", warningMessage: "Algo pode estar errado!",},

      // Personalizados
      { userRemove: "Removido!", userRemoveMessage: "Usuário removido com sucesso!",}
   ];

   return (
      <>
         <div className="flex flex-col items-center gap-2">
            <button
               onClick={() => { setType('success'); setOpen(true); }}
               className="px-4 py-2 bg-green-700 text-white rounded-lg"
            >
               Show Success
            </button>
            <button
               onClick={() => { setType('error'); setOpen(true); }}
               className="px-4 py-2 bg-red-700 text-white rounded-lg"
            >
               Show Error
            </button>
            <button
               onClick={() => { setType('warning'); setOpen(true); }}
               className="px-4 py-2 bg-yellow-700 text-white rounded-lg"
            >
               Show Warning
            </button>
            <button
               onClick={() => { setType('userRemove'); setOpen(true); }}
               className="px-4 py-2 bg-blue-700 text-white rounded-lg"
            >
               usuario removido
            </button>
            <button
               onClick={() => { setType('alteracao'); setOpen(true); }}
               className="px-4 py-2 bg-blue-700 text-white rounded-lg"
            >
               alterado
            </button>



            <Toast.Provider swipeDirection="right">
               <Toast.Root
                  open={open}
                  onOpenChange={setOpen}
                  className={`bg-gray-900 min-w-[300px] text-white mr-2 shadow-lg border-l-4 ${toastStyles[type]}`}
               >
                  <div className="flex items-center gap-2 p-4">
                     <Toast.Title className="font-bold">
                        {icons[type]}
                     </Toast.Title>
                     <Toast.Description className="text-sm">{messages[type]}</Toast.Description>
                  </div>
                  <div className="w-full h-1 bg-gray-700">
                     <div
                        className="w-full h-full bg-blue-500 transition-all"
                        style={{ width: `${progress}%` }}
                     />
                  </div>
               </Toast.Root>
               <Toast.Viewport className="fixed bottom-4 right-4 flex flex-col gap-2 min-w-[300px]" />
            </Toast.Provider>
         </div>
      </>
   );
}
