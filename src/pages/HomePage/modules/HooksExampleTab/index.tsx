import { useComputed, useSignal, useSignalEffect } from '@preact/signals-react'
import { Button } from '../../../../components/button'

export const HookExampleTab = () => {
  // почти тот же useState, только на максималках
  const value = useSignal(0)

  // вычисляемое значение, НО
  // не нужно помнить о зависимостях, которые используются в useMemo
  // они автоматически отслеживаются через подписку на сигнал
  const square = useComputed(() => value.value * value.value)

  // сайд эффект
  //так же не нужно помнить о зависимостях
  useSignalEffect(() => {
    // This effect will automatically re-run whenever count.value changes
    console.log(`The value is now: ${value.value}`)

    // Можно вернуть функцию, которая выполнится до следующего выполнения эффекта
    // и когда компонент анмаунтится
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
