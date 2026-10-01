import { useComputed, useSignal, useSignalEffect } from '@preact/signals-react'
import { Button } from '../../../../components/button'

// пример с использованием сигналов через хуки
export const HookExampleTab = () => {
  // почти тот же useState, только на максималках
  const value = useSignal(0)

  // вычисляемое значение, НО
  // не нужно помнить о зависимостях, которые используются в useMemo
  // они автоматически отслеживаются через подписку на сигнал
  const square = useComputed(() => value.value * value.value)

  // сайд эффект
  // так же не нужно помнить о зависимостях
  useSignalEffect(() => {
    //Эффект запускается каждый раз, когда значение value изменяется
    console.log(`The value is now: ${value.value}`)

    // Можно вернуть функцию, которая выполнится до следующего выполнения эффекта
    // и когда компонент анмаунтится
    return () => {
      console.log(`Cleaning up from count: ${value.value}`)
    }
  })

  return (
    <div>
      {/* !!!При выводе значения указываем сам сигнал, а не его геттер '.value' */}
      <div>Value is: {value}</div>
      <div>Square is: {square}</div>
      <Button onClick={() => value.value++}>Increment</Button>
    </div>
  )
}
