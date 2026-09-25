import { type PropsWithChildren } from 'react'
import { Button as ButtonStyled } from '@mui/material'

interface Props {
  onClick: () => void
}

export const Button = (props: PropsWithChildren<Props>) => {
  const { onClick, children } = props

  console.log('rerender button')
  return (
    <ButtonStyled variant='contained' onClick={onClick}>
      {children}
    </ButtonStyled>
  )
}
