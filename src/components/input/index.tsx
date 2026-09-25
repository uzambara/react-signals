import type { IChangeModel } from '../../state'
import { Input as MaterialInput } from '@mui/material'

export interface Props {
  value: IChangeModel<string>
}

export const Input = (props: Props) => {
  const { value } = props
  return (
    <MaterialInput
      value={value.value}
      onChange={ev => value.onChange(ev.target.value)}
    />
  )
}
