/**
 * Date utilities for lease terms, SLA windows, and fiscal periods.
 */

export function daysBetween(start: Date, end: Date): number {
  const ms = end.getTime() - start.getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

export function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function isWithinRange(date: Date, start: Date, end: Date): boolean {
  return date >= start && date <= end;
}
