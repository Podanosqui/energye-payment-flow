"use client"

import { useState } from "react"
import PaymentForm from "@/components/payment-form"
import PaymentMethodSelection from "@/components/payment-method-selection"
import CreditCardForm from "@/components/credit-card-form"
import PixPayment from "@/components/pix-payment"
import ProcessingPayment from "@/components/processing-payment"
import PaymentApproved from "@/components/payment-approved"
import PaymentDeclined from "@/components/payment-declined"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<
    | "payment-form"
    | "payment-method"
    | "credit-card"
    | "pix"
    | "processing-credit"
    | "processing-pix"
    | "approved"
    | "declined"
  >("payment-form")
  const [kwh, setKwh] = useState(0)
  const [total, setTotal] = useState(0)

  const handlePaymentFormSubmit = (kwhValue: number, totalValue: number) => {
    setKwh(kwhValue)
    setTotal(totalValue)
    setCurrentScreen("payment-method")
  }

  const handlePaymentMethodSelect = (method: "credit" | "pix") => {
    if (method === "credit") {
      setCurrentScreen("credit-card")
    } else {
      setCurrentScreen("pix")
    }
  }

  const handleCreditCardSubmit = () => {
    setCurrentScreen("processing-credit")
    setTimeout(() => {
      setCurrentScreen("approved")
    }, 3000)
  }

  const handlePixPayment = () => {
    setCurrentScreen("processing-pix")
    setTimeout(() => {
      setCurrentScreen("declined")
    }, 10000)
  }

  const handleBack = () => {
    if (currentScreen === "payment-method") {
      setCurrentScreen("payment-form")
    } else if (currentScreen === "credit-card" || currentScreen === "pix") {
      setCurrentScreen("payment-method")
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      {currentScreen === "payment-form" && <PaymentForm onSubmit={handlePaymentFormSubmit} />}
      {currentScreen === "payment-method" && (
        <PaymentMethodSelection onSelect={handlePaymentMethodSelect} onBack={handleBack} />
      )}
      {currentScreen === "credit-card" && <CreditCardForm onSubmit={handleCreditCardSubmit} onBack={handleBack} />}
      {currentScreen === "pix" && <PixPayment onPayment={handlePixPayment} onBack={handleBack} />}
      {currentScreen === "processing-credit" && <ProcessingPayment />}
      {currentScreen === "processing-pix" && <ProcessingPayment />}
      {currentScreen === "approved" && <PaymentApproved />}
      {currentScreen === "declined" && <PaymentDeclined />}
    </main>
  )
}
