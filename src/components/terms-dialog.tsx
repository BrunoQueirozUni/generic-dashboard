"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

interface TermsDialogProps {
  title: string
  content: React.ReactNode
  triggerText: string
}

export function TermsDialog({ title, content, triggerText }: TermsDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto text-[#9FE870] hover:underline cursor-pointer">
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-gray-900 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">{title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">{content}</div>
      </DialogContent>
    </Dialog>
  )
}

