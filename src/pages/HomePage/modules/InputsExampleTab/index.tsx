import { Input } from '../../../../components'
import styled from 'styled-components'
import { Button } from '../../../../components/button'
import { signal, useModel } from '@preact/signals-react'

const Container = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
// пример использования сигналов с инпутами
export const InputsExampleTab = () => {
  // Создаем модель с полями формы
  const form = useModel(() => ({
    name: signal(''),
    password: signal('')
  }))

  return (
    <Container>
      {/*Передаем сигнал прямо в инпут*/}
      <Input value={form.name} />
      <div>Name: {form.name}</div>
      <Input value={form.password} />
      <div>Password: {form.password}</div>
      <Button onClick={() => undefined}>Mock</Button>
    </Container>
  )
}
