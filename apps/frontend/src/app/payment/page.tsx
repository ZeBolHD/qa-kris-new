"use client";

import Script from "next/script";
import { Button, Input } from "@material-tailwind/react";
import { cn } from "@lib/util";
import { TERMINAL_COMPANY_EMAIL, TERMINAL_KEY } from "@lib/constants";

const TINKOFF_PAY_SCRIPT_LINK = "https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js";

const PaymentPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { description, amount, email, phone, receipt } = e.target as any;

    if (receipt) {
      receipt.value = JSON.stringify({
        EmailCompany: TERMINAL_COMPANY_EMAIL,
        Taxation: "patent",
        FfdVersion: "1.2",
        Email: email.value,
        Phone: phone.value,
        Items: [
          {
            Name: description.value || "Оплата",
            Price: Math.round(amount.value * 100),
            Quantity: 1.0,
            Amount: Math.round(amount.value * 100),
            PaymentMethod: "full_prepayment",
            PaymentObject: "service",
            Tax: "none",
            MeasurementUnit: "pc",
          },
        ],
      });
    }

    //@ts-ignore
    const pay = window.pay as any;

    if (pay) {
      pay(e.target);
    } else {
      alert("Платёжный скрипт не загружен. Попробуйте позже.");
    }
  };

  return (
    <>
      <Script
        src={TINKOFF_PAY_SCRIPT_LINK}
        onLoad={() => console.log("Script loaded successfully")}
      />
      <div className="min-h-screen min-w-full flex justify-center items-center">
        <form
          className={cn("flex flex-col gap-4 w-72", "payform-tbank")}
          name="payform-tbank"
          id="payform-tbank"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl m-auto">Оплата</h1>
          <input
            className="payform-tbank-row"
            type="hidden"
            name="terminalkey"
            value={TERMINAL_KEY}
          />
          <input className="payform-tbank-row" type="hidden" name="frame" value="false" />
          <input className="payform-tbank-row" type="hidden" name="language" value="ru" />
          <input className="payform-tbank-row" type="hidden" name="receipt" value="" />
          <Input
            className="payform-tbank-row"
            type="text"
            label="Сумма заказа"
            name="amount"
            required
          />
          <Input
            className="payform-tbank-row"
            type="text"
            label="Описание заказа"
            name="description"
          />
          <Input className="payform-tbank-row" type="text" label="ФИО плательщика" name="name" />
          <Input className="payform-tbank-row" type="email" label="Email" name="email" required />
          <Input
            className="payform-tbank-row"
            type="tel"
            label="Контактный телефон"
            name="phone"
            required
            maxLength={11}
          />
          <Button type="submit">Оплатить</Button>
        </form>
      </div>
    </>
  );
};

export default PaymentPage;
