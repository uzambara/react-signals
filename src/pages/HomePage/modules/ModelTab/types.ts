import { computed, createModel, signal } from '@preact/signals-react'

// Создаем модель при помощи функции createModel, так же объявляем методы и данные.
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
