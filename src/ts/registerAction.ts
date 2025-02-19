"use server";

import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";

export default async function registerAction(formData: FormData) {
   const entrie = Array.from(formData.entries());
   const data = Object.fromEntries(entrie) as {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
   };

   console.log(data);

   if (!data.firstName || !data.lastName || !data.email || !data.password) {
      throw new Error("Todos os campos são obrigatórios");
   }

   // Cria um novo usuário
   await db.user.create({
      data: {
         firstName: data.firstName,
         lastName: data.lastName,
         email: data.email,
         password: hashSync(data.password)
      },
   })
}