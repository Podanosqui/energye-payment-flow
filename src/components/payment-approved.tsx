"use client"

import { Check, ChevronLeft } from "lucide-react"
import Logo from "./logo"
import { useEffect, useState } from "react"

interface PaymentApprovedProps {
  onBack?: () => void
}

export default function PaymentApproved({ onBack }: PaymentApprovedProps) {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (onBack) {
      const timer = setTimeout(() => {
        onBack()
      }, 15000)

      return () => clearTimeout(timer)
    }
  }, [onBack])

  return (
    <div className="w-full max-w-md bg-card rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-card border-b border-border p-6">
        {/* <p className="text-sm text-muted-foreground mb-2">pagamento aprovado</p> */}
        <div className="flex items-center justify-between">
          <Logo />
          {onBack && (
            <button
              onClick={onBack}
              className="flex items-center gap-1.5 text-foreground hover:text-muted-foreground transition-colors px-3 py-2 rounded-lg hover:bg-muted"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Voltar</span>
            </button>
          )}
        </div>
      </div>

      <div className="p-12 flex flex-col items-center justify-center space-y-6">
        <div
          style={{ backgroundColor: "rgba(0, 168, 89, 0.1)" }}
          className="w-24 h-24 rounded-full flex items-center justify-center"
        >
          <div
            style={{ backgroundColor: "rgba(0, 168, 89, 0.2)" }}
            className="w-20 h-20 rounded-full flex items-center justify-center"
          >
            <Check className="w-12 h-12" style={{ color: "var(--color-success)" }} strokeWidth={3} />
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-foreground font-medium">Tudo certo! Pagamento no débito</p>
          <p className="text-foreground font-medium">aprovado.</p>
        </div>

        {onBack && (
          <button
            onClick={onBack}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98]"
            style={{
              backgroundColor: isHovered ? "#008f4a" : "#00a859",
            }}
          >
            Voltar ao início
          </button>
        )}
      </div>
    </div>
  )
}
