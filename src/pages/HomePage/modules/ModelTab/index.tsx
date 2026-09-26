import { useModel } from '@preact/signals-react'
import { NumberModel, NumberSquareModel } from './types.ts'
import { Input } from '@mui/material'
import styled from 'styled-components'
import { Button } from '../../../../components/button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

export const ModelTab = () => {
  const numberModel = useModel(() => new NumberModel(1))
  const squareModel = useModel(() => new NumberSquareModel(1))

  return (
    <Container>
      <div>
        <div>Number value: {numberModel.value}</div>
        <Input
          type='number'
          value={numberModel.value}
          onChange={ev => numberModel.onChange(ev.target.value)}
        />
      </div>

      <div>
        <div>Number value: {squareModel.value}</div>
        <div>Square value: {squareModel.squared}</div>
        <Button onClick={squareModel.increment}>Increment</Button>
      </div>
    </Container>
  )
}
