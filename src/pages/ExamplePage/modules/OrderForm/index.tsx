import { signal, useModel } from '@preact/signals-react'
import { Button as MuiButton, TextField } from '@mui/material'
import styled from 'styled-components'
import { Button } from '../../../../components/button'
import type { Order } from '../../types'
import type { ChangeEvent } from 'react'

interface OrderFormProps {
  onSubmit: (order: Order) => void
  onCancel: () => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  max-width: 500px;
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
`

const Actions = styled.div`
  display: flex;
  column-gap: 10px;
`

class ChangeModel {
  value = signal("")
  onChange = (ev: ChangeEvent<HTMLInputElement>) => this.value.value = ev.target.value
}

export const OrderForm = ({ onSubmit, onCancel }: OrderFormProps) => {
  const form = useModel(() => ({
    fullName: new ChangeModel(),
    address: new ChangeModel(),
    phone: new ChangeModel(),
    email: new ChangeModel(),
    comment: new ChangeModel(),
  }))

  const handleSubmit = () => {
    onSubmit({
      id: crypto.randomUUID(),
      fullName: form.fullName.value.value,
      address: form.address.value.value,
      phone: form.phone.value.value,
      email: form.email.value.value,
      comment: form.comment.value.value
    })
  }

  return (
    <Container>
      <TextField
        label='ФИО'
        {...form.fullName}
      />
      <TextField
        label='Адрес'
        {...form.address}
      />
      <TextField
        label='Телефон'
        {...form.phone}
      />
      <TextField
        label='Email'
        {...form.email}
      />
      <TextField
        label='Комментарий'
        {...form.comment}
        multiline
        rows={3}
      />
      <Actions>
        <Button onClick={handleSubmit}>Добавить</Button>
        <MuiButton variant='outlined' onClick={onCancel}>
          Отмена
        </MuiButton>
      </Actions>
    </Container>
  )
}
