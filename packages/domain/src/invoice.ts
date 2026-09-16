/**
 * Invoice calculation helpers (rent, levies, VAT).
 */

import type { Money } from './money';
import { createMoney, addMoney } from './money';

export interface InvoiceLine {
  description: string;
  amount: Money;
  taxable: boolean;
}

const VAT_RATE = 0.15; // Eswatini standard VAT

export function calculateVat(amount: Money): Money {
  return createMoney(Math.round(amount.amount * VAT_RATE), amount.currency);
}

export function calculateInvoiceTotal(lines: InvoiceLine[]): {
  subtotal: Money;
  vat: Money;
  total: Money;
} {
  const subtotal = lines.reduce(
    (acc, line) => addMoney(acc, line.amount),
    createMoney(0, lines[0]?.amount.currency ?? 'SZL')
  );

  const taxable = lines
    .filter((l) => l.taxable)
    .reduce(
      (acc, line) => addMoney(acc, line.amount),
      createMoney(0, subtotal.currency)
    );

  const vat = calculateVat(taxable);
  const total = addMoney(subtotal, vat);

  return { subtotal, vat, total };
}
