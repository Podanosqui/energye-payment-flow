"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, Copy, Clock } from "lucide-react"
import Logo from "./logo"

interface PixPaymentProps {
  onPayment: () => void
  onBack: () => void
}

export default function PixPayment({ onPayment, onBack }: PixPaymentProps) {
  const [timeLeft, setTimeLeft] = useState(600)
  const [copied, setCopied] = useState(false)
  const pixKey = "7b14605121519f5a8a..."

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-md bg-card rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-card border-b border-border p-6">
        {/* <p className="text-sm text-muted-foreground mb-2">Pix</p> */}
        <div className="flex items-center justify-between">
          <Logo />
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-foreground hover:text-muted-foreground transition-colors px-3 py-2 rounded-lg hover:bg-muted"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <div
            style={{ borderColor: "var(--color-cyan)" }}
            className="w-48 h-48 bg-card border-4 rounded-2xl flex items-center justify-center"
          >
            <div className="w-40 h-40 bg-black">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <rect width="100" height="100" fill="white" />
                <g fill="black">
                  <rect x="10" y="10" width="5" height="5" />
                  <rect x="20" y="10" width="5" height="5" />
                  <rect x="30" y="10" width="5" height="5" />
                  <rect x="65" y="10" width="5" height="5" />
                  <rect x="75" y="10" width="5" height="5" />
                  <rect x="85" y="10" width="5" height="5" />
                  <rect x="10" y="20" width="5" height="5" />
                  <rect x="30" y="20" width="5" height="5" />
                  <rect x="45" y="20" width="5" height="5" />
                  <rect x="65" y="20" width="5" height="5" />
                  <rect x="85" y="20" width="5" height="5" />
                  <rect x="10" y="30" width="5" height="5" />
                  <rect x="30" y="30" width="5" height="5" />
                  <rect x="50" y="30" width="5" height="5" />
                  <rect x="65" y="30" width="5" height="5" />
                  <rect x="85" y="30" width="5" height="5" />
                  <rect x="45" y="45" width="10" height="10" />
                  <rect x="10" y="65" width="5" height="5" />
                  <rect x="20" y="65" width="5" height="5" />
                  <rect x="30" y="65" width="5" height="5" />
                  <rect x="50" y="65" width="5" height="5" />
                  <rect x="75" y="65" width="5" height="5" />
                  <rect x="10" y="75" width="5" height="5" />
                  <rect x="30" y="75" width="5" height="5" />
                  <rect x="55" y="75" width="5" height="5" />
                  <rect x="70" y="75" width="5" height="5" />
                  <rect x="10" y="85" width="5" height="5" />
                  <rect x="30" y="85" width="5" height="5" />
                  <rect x="45" y="85" width="5" height="5" />
                  <rect x="65" y="85" width="5" height="5" />
                  <rect x="85" y="85" width="5" height="5" />
                </g>
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="w-5 h-5" />
            {/* <span className="font-medium">Aguardando pagamento...</span> */}
            <span style={{ color: "var(--color-primary-green)" }} className="font-semibold">
              {formatTime(timeLeft)}
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center leading-relaxed px-4">
            Copie o código abaixo e utilize o app Copia e Cola no aplicativo que deseja fazer o pagamento.
          </p>

          <div className="w-full bg-input rounded-lg p-4 flex items-center justify-between gap-3">
            <span className="text-sm text-foreground font-mono truncate">{pixKey}</span>
            <button
              onClick={handleCopy}
              className="text-white px-5 py-2.5 rounded-lg font-semibold flex items-center gap-2 flex-shrink-0 transition-all hover:shadow-md hover:scale-105 active:scale-95"
              style={{ backgroundColor: "#00a859" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#008f4a")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00a859")}
            >
              <Copy className="w-4 h-4" />
              {copied ? "Copiado!" : "Copiar"}
            </button>
          </div>

          <button
            onClick={onPayment}
            className="w-full text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] shadow-md mt-4"
            style={{ backgroundColor: "#00a859" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#008f4a")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00a859")}
          >
            Simular Pagamento
          </button>
        </div>
      </div>
    </div>
  )
}
