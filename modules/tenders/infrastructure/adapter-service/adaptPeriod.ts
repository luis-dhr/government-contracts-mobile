import { Period } from '../../domain'

export function adaptPeriod (
  period: { startDate: string, endDate: string, durationInDays: number }
): Period {
  return {
    startDate: new Date(period.startDate),
    endDate: new Date(period.endDate),
    durationInDays: period.durationInDays
  }
}
