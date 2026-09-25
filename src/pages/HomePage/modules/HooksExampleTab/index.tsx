import { useComputed, useSignal, useSignalEffect } from '@preact/signals-react'
import { Button } from '../../../../components/button'

export const HookExampleTab = () => {
  const value = useSignal(0)

  // не нужно помнить о зависимостях, которые используются в useMemo
  const square = useComputed(() => value.value * value.value)

  useSignalEffect(() => {
    // This effect will automatically re-run whenever count.value changes
    console.log(`The value is now: ${value.value}`)

    // You can return a cleanup function, which runs before the next
    // execution and when the component unmounts.
    return () => {
      console.log(`Cleaning up from count: ${value.value}`)
    }
  })

  return (
    <div>
      <div>Value is: {value}</div>
      <div>Square is: {square}</div>
      <Button onClick={() => value.value++}>Increment</Button>
    </div>
  )
}
