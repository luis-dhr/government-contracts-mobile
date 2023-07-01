import { Tender } from '../../../../modules/tenders/domain'

export interface TenderCardProps {
  tender: Tender
  onPress?: () => void
}
