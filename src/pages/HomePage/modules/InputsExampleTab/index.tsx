import { Input } from '../../../../components'
import { ChangeModel } from '../../../../state'
import styled from 'styled-components'

const state = {
  name: new ChangeModel(''),
  password: new ChangeModel('')
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
    </Container>
  )
}
