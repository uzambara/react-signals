import { computed, createModel, signal } from '@preact/signals-react'

export function createChangeModel<T>() {
  return createModel((initial: T) => ({
    value: signal<T>(initial),
    onChange(newValue: T) {
      this.value.value = newValue
    }
  }))
}

export const NumberModel = createChangeModel()

export const NumberSquareModel = createModel((initial: number) => {
  const value = signal(initial)

  return {
    value,
    squared: computed(() => value.value ** 2),
    increment() {
      value.value++
    }
  }
})
