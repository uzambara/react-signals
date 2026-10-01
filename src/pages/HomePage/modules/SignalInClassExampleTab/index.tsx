import { StateExampleTabStateProvider, useStateExampleTabState } from './state'
import { Button } from '../../../../components/button'

const SignalInClassExampleTabComponent = () => {
  //достаем из контекста все данные и методы, которые нужны
  const { incrementValue, value, square } = useStateExampleTabState()
  return (
    <div>
      <div>Value is: {value}</div>
      <div>Square is: {square}</div>
      <Button onClick={incrementValue}>Increment</Button>
    </div>
  )
}

export const SignalInClassExampleTab = () => (
  <StateExampleTabStateProvider>
    <SignalInClassExampleTabComponent />
  </StateExampleTabStateProvider>
)
