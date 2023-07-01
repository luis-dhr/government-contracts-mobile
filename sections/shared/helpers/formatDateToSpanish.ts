import { capitalize } from './capitalize'

/**
 * This function formats a date to Spanish.
 * * It takes a date object as an argument and returns a string.
 * * The string is a Spanish-language representation of the date.
 */
export function formatDateToSpanish (date: Date): Capitalize<string> {
  const formatted = date.toLocaleDateString(
    'es-ES',
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  )

  return capitalize(formatted)
}
