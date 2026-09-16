/**
 * SLA calculation helpers for ticket response and resolution times.
 */

export type SlaPriority = 'critical' | 'high' | 'medium' | 'low';

export interface SlaTargets {
  responseHours: number;
  resolutionHours: number;
}

const DEFAULT_TARGETS: Record<SlaPriority, SlaTargets> = {
  critical: { responseHours: 1, resolutionHours: 4 },
  high: { responseHours: 4, resolutionHours: 24 },
  medium: { responseHours: 8, resolutionHours: 72 },
  low: { responseHours: 24, resolutionHours: 168 },
};

export function getSlaTargets(priority: SlaPriority): SlaTargets {
  return DEFAULT_TARGETS[priority];
}

export function isSlaBreached(
  createdAt: Date,
  now: Date,
  targetHours: number
): boolean {
  const elapsedMs = now.getTime() - createdAt.getTime();
  const targetMs = targetHours * 60 * 60 * 1000;
  return elapsedMs > targetMs;
}
