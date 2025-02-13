"use client"

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

// Imagens  
import Logo from "../../../../public/imgs/alterra.gif"

export default function RecoverPasswordPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black p-4">
      <div className="w-full max-w-[400px] space-y-6">
        <div className="flex flex-col items-center space-y-2">
          <Image
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
            className="mb-4 select-none"
          />
          <h1 className="text-2xl font-bold text-white">Recuperar senha</h1>
          <p className="text-sm text-gray-400 text-center">
            Digite seu email abaixo e enviaremos um link para redefinir sua senha
          </p>
        </div>

        <Card className="border-0 bg-gray-900/50 backdrop-blur-xl">
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>

            <Button className="w-full bg-[#9FE870] text-black hover:bg-[#9FE870]/90">Enviar link de recuperação</Button>
          </CardContent>
          <CardFooter className="justify-center pb-6">
            <p className="text-sm text-gray-400">
              Lembrou sua senha?{" "}
              <Link href="/login" className="text-[#9FE870] hover:underline">
                Voltar para o login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

