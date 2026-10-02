import { Button } from '../../components/button'
import { OrderForm } from './modules/OrderForm'
import { OrderTable } from './modules/OrderTable'
import { OrdersPageProvider, useOrdersPageState } from './state'
import type { Order } from './types'
import { BackLink, Container, Header } from './styled.ts'

// Страница с Заявками
const ExamplePageComponent = () => {
  // Достаем данные и методы из стейта
  const { isFormOpen, openModal, closeModal, addOrder } = useOrdersPageState()

  const handleSubmit = (order: Order) => {
    addOrder(order)
    isFormOpen.value = false
  }

  return (
    <Container>
      <BackLink to='/home'>На главную</BackLink>
      <Header>
        <h2>Заявки</h2>
        <Button onClick={openModal}>Добавить</Button>
      </Header>
      {isFormOpen.value && (
        <OrderForm onSubmit={handleSubmit} onCancel={closeModal} />
      )}
      <OrderTable />
    </Container>
  )
}

// Оборачиваем компонент в провайдер для доступа к стейту
export const ExamplePage = () => (
  <OrdersPageProvider>
    <ExamplePageComponent />
  </OrdersPageProvider>
)
