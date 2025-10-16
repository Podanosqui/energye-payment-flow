"use client"

import { CreditCard, QrCode, ChevronLeft } from "lucide-react"
import Logo from "./logo"

interface PaymentMethodSelectionProps {
  onSelect: (method: "credit" | "pix") => void
  onBack: () => void
}

export default function PaymentMethodSelection({ onSelect, onBack }: PaymentMethodSelectionProps) {
  return (
    <div className="w-full max-w-md bg-card rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-card border-b border-border p-6">
        {/* <p className="text-sm text-muted-foreground mb-2">forma de pagamento</p> */}
        <div className="flex items-center justify-between">
          <Logo />
        </div>
      </div>

      <div className="p-6 space-y-6">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-foreground hover:text-muted-foreground transition-colors px-3 py-2 rounded-lg hover:bg-muted"
        >
          <ChevronLeft className="w-5 h-5" />
          <span className="font-medium">Voltar</span>
        </button>
        <h2 className="text-xl font-semibold text-foreground">Escolha a forma de pagamento</h2>

        <div className="space-y-4">
          <button
            onClick={() => onSelect("credit")}
            className="w-full p-5 border-2 rounded-xl hover:bg-accent transition-colors text-left group"
            style={{ borderColor: "#22d3ee" }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#a5f3fc" }}
              >
                <CreditCard className="w-6 h-6" style={{ color: "#22d3ee" }} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Cartão de Crédito</h3>
                <p className="text-sm text-muted-foreground">Adicione o seu cartão para finalizar o pagamento</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelect("pix")}
            className="w-full p-5 border-2 border-border rounded-xl hover:bg-accent transition-colors text-left group"
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#a5f3fc" }}
              >
                <QrCode className="w-6 h-6" style={{ color: "#22d3ee" }} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">Pix</h3>
                <p className="text-sm text-muted-foreground">Rápido e prático.</p>
              </div>
            </div>
          </button>
        </div>

        <button
          className="w-full text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] shadow-md"
          style={{ backgroundColor: "#00a859" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#008f4a")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00a859")}
        >
          Continuar
        </button>
      </div>
    </div>
  )
}
