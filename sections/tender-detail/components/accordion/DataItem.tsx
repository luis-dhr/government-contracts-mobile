import { Flex, Paragraph } from '../../../shared/components'

interface DataItemProps {
  color: string
  title: string
  value: string
}

export function DataItem ({ color, title, value }: DataItemProps) {
  return (
    <Flex direction='column'>
      <Paragraph weight='bold' color={color}>{title}: </Paragraph>
      <Paragraph color={color}>{value}</Paragraph>
    </Flex>
  )
}
