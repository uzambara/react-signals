import { Button } from '../../../../components/button'
import { useMemo, useState } from 'react'

export const SimpleExampleTab = () => {
  const [value, setValue] = useState(0)
  const square = useMemo(() => value * value, [value])

  return (
    <div>
      <div>Value is: {value}</div>
      <div>Square is: {square}</div>
      <Button onClick={() => setValue(prev => prev + 1)}>Increment</Button>
    </div>
  )
}
