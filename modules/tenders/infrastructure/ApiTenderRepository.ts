import { API_URL, PAGE_SIZE } from '@env'
import { Tender, TenderRepository } from '../domain'
import { TenderFromApi } from './adapter-service/apiEntities'
import { adaptTender } from './adapter-service/adaptTender'

export function createApiTenderRepository (): TenderRepository {
  return { getAll }
}

/**
 * Fetches a list of tenders from the API and returns them as an array of Tender objects.
 * If an error occurs, an empty array is returned.
 * @param page - The page number to fetch (Default: 1)
 * @returns An array of Tender objects representing the fetched tenders.
*/
export async function getAll (page = 1): Promise<Tender[]> {
  try {
    const data = await fetch(`${API_URL}?page=${page}&pageSize=${PAGE_SIZE}`).then(
      (response) => response.json()
    )

    if (data.results !== null && data.results !== undefined) {
      return data.results.map((result: { compiledRelease: TenderFromApi }) =>
        adaptTender(result.compiledRelease)
      )
    }

    return []
  } catch (error) {
    return []
  }
}
