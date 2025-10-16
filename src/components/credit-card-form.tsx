"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import Logo from "./logo"

interface CreditCardFormProps {
  onSubmit: () => void
  onBack: () => void
}

export default function CreditCardForm({ onSubmit, onBack }: CreditCardFormProps) {
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    securityCode: "",
    expiryDate: "",
    fullName: "",
    email: "",
    cpf: "",
    street: "",
    complement: "",
    number: "",
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <div className="w-full max-w-md bg-card rounded-2xl shadow-lg overflow-hidden max-h-[90vh] overflow-y-auto">
      <div className="bg-card border-b border-border p-6 sticky top-0 z-10">
        {/* <p className="text-sm text-muted-foreground mb-2">cartão de crédito</p> */}
        <div className="flex items-center justify-between">
          <Logo />
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-1.5 text-foreground hover:text-muted-foreground transition-colors px-3 py-2 rounded-lg hover:bg-muted"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium">Voltar</span>
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-foreground">Insira os dados do cartão</h3>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Nome do titular do cartão<span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={formData.cardName}
              onChange={(e) => handleChange("cardName", e.target.value)}
              placeholder="Escreva o nome do titular"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Número do cartão<span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={formData.cardNumber}
              onChange={(e) => handleChange("cardNumber", e.target.value)}
              placeholder="Escreva o número do cartão"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Código de segurança<span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={formData.securityCode}
              onChange={(e) => handleChange("securityCode", e.target.value)}
              placeholder="Escreva o número de segurança"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Data de validade<span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={formData.expiryDate}
              onChange={(e) => handleChange("expiryDate", e.target.value)}
              placeholder="16/48"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Nome completo<span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="Nome completo"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              E-mail<span className="text-destructive">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="email@example.com"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              CPF<span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={formData.cpf}
              onChange={(e) => handleChange("cpf", e.target.value)}
              placeholder="000 000 000 00"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-foreground">
              Rua<span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              value={formData.street}
              onChange={(e) => handleChange("street", e.target.value)}
              placeholder="Rua"
              className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Complemento<span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                value={formData.complement}
                onChange={(e) => handleChange("complement", e.target.value)}
                placeholder="Complemento"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-foreground">
                Nº<span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                value={formData.number}
                onChange={(e) => handleChange("number", e.target.value)}
                placeholder="000"
                className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full text-white font-semibold py-4 rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] shadow-md"
          style={{ backgroundColor: "#00a859" }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#008f4a")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#00a859")}
        >
          Realizar pagamento
        </button>
      </form>
    </div>
  )
}
