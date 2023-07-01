import { Period } from '../../../modules/tenders/domain'
import { formatDateToDDMMYYYY } from './formatDateToDDMMYYYY'

export function getPeriodString (period: Period) {
  const startDate = formatDateToDDMMYYYY(period.startDate)
  const endDate = formatDateToDDMMYYYY(period.endDate)

  return `${startDate} - ${endDate}`
}
