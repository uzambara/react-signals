import { computed, signal } from '@preact/signals-react'
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useState
} from 'react'

class StateExampleTabState {
  private _value = signal<number>(0)

  public incrementValue = () => {
    this._value.value = this._value.value + 1
  }

  public value = computed(() => {
    return this._value.value
  })

  public square = computed(() => {
    return this._value.value * this.value.value
  })
}

export const StateExampleTabStateContext = createContext<StateExampleTabState>(
  null!
)

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

export const useStateExampleTabState = () =>
  useContext(StateExampleTabStateContext)
