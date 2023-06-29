import { TenderRepository } from '../domain'
import { adaptTender } from './adapter-service/adaptTender'

export function createApiTenderRepository (): TenderRepository {
  return { getAll }
}

export async function getAll (page = 1) {
  const url = process.env.API_URL as string

  const data = await fetch(`${url}?page=${page}&pageSize=20`).then(
    (response) => response.json()
  )

  if (data !== null && data !== undefined) {
    return data.map(adaptTender)
  }

  return []
}
