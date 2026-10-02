import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@mui/material'
import styled from 'styled-components'
import { useOrdersPageState } from '../../state'

const EmptyState = styled.p`
  color: #777;
`

const columns = ['ФИО', 'Адрес', 'Телефон', 'Email', 'Комментарий', '']

export const OrderTable = () => {
  const { filteredOrders, orders, removeOrder } = useOrdersPageState()
  if (orders.value.length === 0) {
    return <EmptyState>Заявок пока нет</EmptyState>
  }

  if (filteredOrders.value.length === 0) {
    return <EmptyState>Заявок удовлетворяющих фильтру нет</EmptyState>
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map(column => (
            <TableCell key={column}>{column}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {filteredOrders.value.map(order => (
          <TableRow key={order.id}>
            <TableCell>{order.fullName}</TableCell>
            <TableCell>{order.address}</TableCell>
            <TableCell>{order.phone}</TableCell>
            <TableCell>{order.email}</TableCell>
            <TableCell>{order.comment}</TableCell>
            <TableCell>
              <Button
                color='error'
                size='small'
                onClick={() => removeOrder(order.id)}
              >
                Удалить
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
