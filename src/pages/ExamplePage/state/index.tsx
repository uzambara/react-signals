import { signal } from '@preact/signals-react'
import type { Order } from '../types'
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState
} from 'react'

const STORAGE_KEY = 'example-page.orders'

function readOrders(): Order[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Order[]) : []
  } catch {
    return []
  }
}

// Стейт для страницы с заявками
export class OrdersState {
  // Заявки
  public readonly orders = signal<Order[]>(readOrders())
  // Признак, что форма создания открыта
  public readonly isFormOpen = signal(false)

  // Открыть форму
  public openModal = () => (this.isFormOpen.value = true)
  // Закрыть форму
  public closeModal = () => (this.isFormOpen.value = false)

  // Добавить заявку
  public addOrder = (order: Order): void => {
    this.orders.value = [...this.orders.value, order]
    this.persist()
  }

  // Удалить заявку
  public removeOrder = (id: string): void => {
    this.orders.value = this.orders.value.filter(order => order.id !== id)
    this.persist()
  }

  // Сохранить заявки в localStorage
  private persist = (): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.orders.value))
  }
}

// Контекст
const OrdersPageContext = createContext<OrdersState>(null!)

// Провайдер
export const OrdersPageProvider = (props: PropsWithChildren) => {
  const [state] = useState<OrdersState>(() => new OrdersState())
  return (
    <OrdersPageContext.Provider value={state}>
      {props.children}
    </OrdersPageContext.Provider>
  )
}

// Хук для получения стейта
export const useOrdersPageState = () => useContext(OrdersPageContext)
