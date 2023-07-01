/**
 * This function formats a date object into a string that represents
 * the date in dd/mm/yyyy format.
 */
export function formatDateToDDMMYYYY (date: Date) {
  const formatted = date.toLocaleDateString(
    'es-ES',
    { year: 'numeric', month: '2-digit', day: '2-digit' }
  )

  return formatted
}
