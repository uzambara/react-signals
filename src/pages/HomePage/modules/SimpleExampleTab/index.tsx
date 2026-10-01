import { Button } from '../../../../components/button'
import { useMemo, useState } from 'react'

// пример с использованием useState
export const SimpleExampleTab = () => {
  // Стандартный способ через useState. Значение и сеттер для значения
  const [value, setValue] = useState(0)
  // вычисляемое значение
  const square = useMemo(() => value * value, [value])

  return (
    <div>
      <div>Value is: {value}</div>
      <div>Square is: {square}</div>
      <Button onClick={() => setValue(prev => prev + 1)}>Increment</Button>
    </div>
  )
}
