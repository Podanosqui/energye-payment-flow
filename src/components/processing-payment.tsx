"use client"

import Logo from "./logo"

export default function ProcessingPayment() {
  return (
    <div className="w-full max-w-md bg-card rounded-2xl shadow-lg overflow-hidden">
      <div className="bg-card border-b border-border p-6">
        {/* <p className="text-sm text-muted-foreground mb-2">processando pagamento</p> */}
        <Logo />
      </div>

      <div className="p-12 flex flex-col items-center justify-center space-y-6">
        <div className="relative w-24 h-24">
          <div
            style={{ borderColor: "var(--color-cyan)", opacity: 0.3 }}
            className="absolute inset-0 border-4 rounded-full"
          ></div>
          <div
            style={{ borderTopColor: "var(--color-cyan)" }}
            className="absolute inset-0 border-4 border-transparent rounded-full animate-spin"
          ></div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-foreground font-medium">Processando pagamento. Isso</p>
          <p className="text-foreground font-medium">pode levar alguns segundos.</p>
        </div>
      </div>
    </div>
  )
}
