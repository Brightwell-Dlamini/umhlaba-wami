/**
 * Double-entry ledger primitives for tenant accounts and deposits.
 */

import type { Money } from './money';

export type LedgerEntryType = 'debit' | 'credit';

export interface LedgerEntry {
  id: string;
  accountId: string;
  type: LedgerEntryType;
  amount: Money;
  description: string;
  createdAt: Date;
}

export function balanceFromEntries(entries: LedgerEntry[]): number {
  return entries.reduce((sum, e) => {
    return e.type === 'credit' ? sum + e.amount.amount : sum - e.amount.amount;
  }, 0);
}
