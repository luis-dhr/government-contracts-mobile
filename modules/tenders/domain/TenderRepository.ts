import { Tender } from './tender/Tender'

/** TenderRepository is the interface that must be implemented by any Tender repository. */
export interface TenderRepository {
  getAll: (page: number) => Promise<Tender[]>
}
