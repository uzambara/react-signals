import {
  StateExampleTabState,
  StateExampleTabStateProvider,
  useStateExampleTabState
} from './state'
import { Button } from '../../../../components/button'

const singletonState = new StateExampleTabState()

// пример с использованием сигналов через класс
const SignalInClassExampleTabComponent = () => {
  // достаем из контекста все данные и методы, которые нужны
  const { incrementValue, value, square } = useStateExampleTabState()
  return (
    <div>
      <div>Value is: {value}</div>
      <div>Square is: {square}</div>
      <Button onClick={incrementValue}>Increment</Button>

      <h4>Singleton</h4>
      <div>Value is: {singletonState.value}</div>
      <div>Square is: {singletonState.square}</div>
      <Button onClick={singletonState.incrementValue}>Increment</Button>
    </div>
  )
}

export const SignalInClassExampleTab = () => (
  <StateExampleTabStateProvider>
    <SignalInClassExampleTabComponent />
  </StateExampleTabStateProvider>
)
