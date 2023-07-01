// import { TenderFromApi } from '../../../../modules/tenders/infrastructure/adapter-service/apiEntities'
// import { adaptTender } from '../../../../modules/tenders/infrastructure/adapter-service/adaptTender'
// import { getAll } from '../../../../modules/tenders/infrastructure'

// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ results: [] })
//   } as unknown as Response)
// )

// beforeEach(() => {
//   jest.clearAllMocks()
// })

// // Tests that an empty array is returned when API call is successful but no results are returned
// it('test_empty_results', async () => {
//   const result = await getAll()
//   expect(result).toEqual([])
// })

// // Tests that an array of Tender objects is returned when API call is successful
// it('test_successful_call', async () => {
//   const mockResponse = {
//     results: [
//       {
//         id: '1',
//         tender: { id: '1' },
//         publisher: { name: 'test', uri: 'test' },
//         date: '2022-01-01',
//         contracts: [],
//         parties: []
//       }
//     ]
//   } as unknown as TenderFromApi

//   jest.fn().mockImplementation(() => {
//     return Promise.resolve(mockResponse)
//   })

//   const result = await getAll(1)
//   expect(result.length).toBeGreaterThan(0)
//   expect(result[0]).toHaveProperty('id')
//   expect(result[0]).toHaveProperty('tenderId')
//   expect(result[0]).toHaveProperty('title')
//   expect(result[0]).toHaveProperty('publisher')
//   expect(result[0]).toHaveProperty('source')
//   expect(result[0]).toHaveProperty('dateOfPublication')
//   expect(result[0]).toHaveProperty('availableContracts')
//   expect(result[0]).toHaveProperty('participants')
// })

// // Tests that an empty array is returned when API call fails
// it('test_empty_array_on_failure', async () => {
//   const result = await getAll(99999)
//   expect(result).toEqual([])
// })

// // Tests that an array of Tender objects is returned with default title when tender title is missing
// it('test_default_title', () => {
//   const data = {
//     id: '1',
//     tender: { id: '1' },
//     publisher: { name: 'test', uri: 'test' },
//     date: '2022-01-01',
//     contracts: [],
//     parties: []
//   }
//   const result = adaptTender(data)
//   expect(result.title).toEqual('Licitación sin título #1')
// })

// // Tests that an array of Tender objects is returned with default title and tender id when tender title is missing and tender id is missing
// it('test_default_title_and_id', () => {
//   const data = {
//     id: '1',
//     tender: {},
//     publisher: { name: 'test', uri: 'test' },
//     date: '2022-01-01',
//     contracts: [],
//     parties: []
//   } as unknown as TenderFromApi

//   const result = adaptTender(data)
//   expect(result.title).toEqual('Licitación sin título #1')
//   expect(result.tenderId).toEqual('')
// })

// // Tests that an array of Tender objects is returned with empty availableContracts array when contracts array is missing
// it('test_empty_available_contracts', () => {
//   const data = {
//     id: '1',
//     tender: { id: '1' },
//     publisher: { name: 'test', uri: 'test' },
//     date: '2022-01-01',
//     parties: []
//   } as unknown as TenderFromApi

//   const result = adaptTender(data)
//   expect(result.availableContracts).toEqual([])
// })
