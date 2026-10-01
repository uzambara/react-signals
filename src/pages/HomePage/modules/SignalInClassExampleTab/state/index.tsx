import { computed, signal } from '@preact/signals-react'
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState
} from 'react'

// Объявляем класс, который содержит данные и методы
export class StateExampleTabState {
  // сигналы можно объявлять вне компонентов
  private _value = signal<number>(0)

  public incrementValue = () => {
    this._value.value = this._value.value + 1
  }

  public value = computed(() => {
    return this._value.value
  })

  // вычислять данные тоже можно вне компонента
  public square = computed(() => {
    return this._value.value * this._value.value
  })
}

// Стейт будет передавать в компоненты через контекст.
export const StateExampleTabStateContext = createContext<StateExampleTabState>(
  null!
)
// Создаем провайдер для контекста
export const StateExampleTabStateProvider = ({
  children
}: PropsWithChildren) => {
  const [state] = useState(new StateExampleTabState())

  return (
    <StateExampleTabStateContext.Provider value={state}>
      {children}
    </StateExampleTabStateContext.Provider>
  )
}
// Для удобства создаем хук для доступа к нашему стейту, можно разделить на разные хуки
// например данные и методы
export const useStateExampleTabState = () =>
  useContext(StateExampleTabStateContext)
