import { type ComponentType } from 'react'

import { type DefaultProps } from 'src/icons'

export interface InfoItem {
  title: string
  value: string
  Icon: ComponentType<DefaultProps>
}
