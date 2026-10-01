import { useModel } from '@preact/signals-react'
import { NumberSquareModel } from './types.ts'
import styled from 'styled-components'
import { Button } from '../../../../components/button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`
//После написания своего велосипеда нашел, что в @preact/signals-react есть Model
export const ModelTab = () => {
  const squareModel = useModel(() => new NumberSquareModel(1))

  return (
    <Container>
      <div>
        <div>Number value: {squareModel.value}</div>
        <div>Square value: {squareModel.squared}</div>
        <Button onClick={squareModel.increment}>Increment</Button>
      </div>
    </Container>
  )
}
