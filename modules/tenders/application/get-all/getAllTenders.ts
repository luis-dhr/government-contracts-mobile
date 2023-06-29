import { Tender } from '../../domain'
import { TenderRepository } from '../../domain/TenderRepository'

export function getAllTenders (tenderRepository: TenderRepository) {
  return async function (page: number): Promise<Tender[]> {
    return await tenderRepository.getAll(page)
  }
}
