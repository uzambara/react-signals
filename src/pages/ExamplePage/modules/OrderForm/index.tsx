import { signal, useModel } from '@preact/signals-react'
import { Button as MuiButton, TextField } from '@mui/material'
import { Button } from '../../../../components/button'
import type { Order } from '../../types'
import type { ChangeEvent } from 'react'
import { Actions, Container } from './styled'

interface OrderFormProps {
  onSubmit: (order: Order) => void
  onCancel: () => void
}

// Модель для хранения значения инпута
class ChangeModel {
  private _value = signal('')

  public value() {
    return this._value.value
  }

  public onChange = (ev: ChangeEvent<HTMLInputElement>) =>
    (this._value.value = ev.target.value)
}

// Компонент с формой заявки
export const OrderForm = ({ onSubmit, onCancel }: OrderFormProps) => {
  const form = useModel(() => ({
    fullName: new ChangeModel(),
    address: new ChangeModel(),
    phone: new ChangeModel(),
    email: new ChangeModel(),
    comment: new ChangeModel()
  }))

  const handleSubmit = () => {
    onSubmit({
      id: crypto.randomUUID(),
      fullName: form.fullName.value(),
      address: form.address.value(),
      phone: form.phone.value(),
      email: form.email.value(),
      comment: form.comment.value()
    })
  }

  return (
    <Container>
      <TextField label='ФИО' {...form.fullName} />
      <TextField label='Адрес' {...form.address} />
      <TextField label='Телефон' {...form.phone} />
      <TextField label='Email' {...form.email} />
      <TextField label='Комментарий' {...form.comment} multiline rows={3} />
      <Actions>
        <Button onClick={handleSubmit}>Добавить</Button>
        <MuiButton variant='outlined' onClick={onCancel}>
          Отмена
        </MuiButton>
      </Actions>
    </Container>
  )
}
