"use client"

import { useState } from "react"
import Logo from "./logo"

interface PaymentFormProps {
  onSubmit: (kwh: number, total: number) => void
}

export default function PaymentForm({ onSubmit }: PaymentFormProps) {
  const [kwh, setKwh] = useState("")
  const pricePerKwh = 2.0

  const calculateTotal = (value: string) => {
    const kwhValue = Number.parseFloat(value) || 0
    return kwhValue * pricePerKwh
  }

  const handleSubmit = () => {
    const kwhValue = Number.parseFloat(kwh) || 0
    const total = calculateTotal(kwh)
    onSubmit(kwhValue, total)
  }

  return (
    <div className="w-full max-w-md bg-card rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-card border-b border-border p-6">
        {/* <p className="text-sm text-muted-foreground mb-2">forma de pagamento</p> */}
        <Logo />
      </div>

      <div className="p-6 space-y-6">
        <div className="bg-muted rounded-xl p-4 space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium text-foreground">1 kWH</span>
            <span className="text-lg font-medium text-foreground">R$ {pricePerKwh.toFixed(2)}</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            O custo da recarga será calculado conforme o consumo de energia.
          </p>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-foreground">
            Consumo kWh<span className="text-destructive">*</span>
          </label>
          <input
            type="number"
            value={kwh}
            onChange={(e) => setKwh(e.target.value)}
            placeholder="0 kWh"
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-border">
          <span className="text-lg font-medium text-foreground">Total</span>
          <span className="text-lg font-medium text-foreground">R$ {calculateTotal(kwh).toFixed(2)}</span>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] shadow-md"
          style={{ backgroundColor: "#00a859" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#008f4a")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00a859")}
        >
          Realizar Pagamento
        </button>
      </div>
    </div>
  )
}
