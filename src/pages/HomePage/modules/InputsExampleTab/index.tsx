import { Input } from '../../../../components'
import styled from 'styled-components'
import { Button } from '../../../../components/button'
import { signal } from '@preact/signals-react'

const state = {
  name: signal(''),
  password: signal('')
}

const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const InputsExampleTab = () => {
  return (
    <Container>
      <Input value={state.name} />
      <div>Name: {state.name.value}</div>
      <Input value={state.password} />
      <div>Password: {state.password.value}</div>
      <Button onClick={() => undefined}>Mock</Button>
    </Container>
  )
}
