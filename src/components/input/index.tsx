import { Input as MaterialInput } from '@mui/material'
import type { Signal } from '@preact/signals-react'

export interface Props {
  value: Signal<string>
}

export const Input = (props: Props) => {
  const { value } = props
  return (
    <MaterialInput
      value={value.value}
      onChange={ev => (value.value = ev.target.value)}
    />
  )
}
