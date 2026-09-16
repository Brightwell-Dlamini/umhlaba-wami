/**
 * Money utilities for currency handling (SZL / ZAR).
 * Pure functions only — no side effects.
 */

export type Currency = 'SZL' | 'ZAR';

export interface Money {
  amount: number; // minor units (cents)
  currency: Currency;
}

export function createMoney(amount: number, currency: Currency = 'SZL'): Money {
  return { amount: Math.round(amount), currency };
}

export function formatMoney(money: Money): string {
  const major = money.amount / 100;
  return `${money.currency} ${major.toFixed(2)}`;
}

export function addMoney(a: Money, b: Money): Money {
  if (a.currency !== b.currency) {
    throw new Error('Currency mismatch');
  }
  return createMoney(a.amount + b.amount, a.currency);
}
