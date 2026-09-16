import { describe, it, expect } from 'vitest';
import { createMoney, formatMoney, addMoney } from '../money';

describe('money', () => {
  it('creates money in minor units', () => {
    const m = createMoney(10050, 'SZL');
    expect(m.amount).toBe(10050);
    expect(m.currency).toBe('SZL');
  });

  it('formats money correctly', () => {
    expect(formatMoney(createMoney(10050, 'SZL'))).toBe('SZL 100.50');
  });

  it('adds money of the same currency', () => {
    const a = createMoney(10000, 'SZL');
    const b = createMoney(2500, 'SZL');
    expect(addMoney(a, b).amount).toBe(12500);
  });

  it('throws on currency mismatch', () => {
    const a = createMoney(100, 'SZL');
    const b = createMoney(100, 'ZAR');
    expect(() => addMoney(a, b)).toThrow('Currency mismatch');
  });
});
