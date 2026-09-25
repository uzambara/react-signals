import { StateExampleTabStateProvider, useStateExampleTabState } from './state'
import { Button } from '../../../../components/button'

const StateExampleTabComponent = () => {
  const { incrementValue, value, square } = useStateExampleTabState()
  return (
    <div>
      <div>Value is: {value}</div>
      <div>Square is: {square}</div>
      <Button onClick={incrementValue}>Increment</Button>
    </div>
  )
}

export const StateExampleTab = () => (
  <StateExampleTabStateProvider>
    <StateExampleTabComponent />
  </StateExampleTabStateProvider>
)
