import { Tender } from './tender/Tender'

export interface TenderRepository {
  getAll: (page: number) => Promise<Tender[]>
}
