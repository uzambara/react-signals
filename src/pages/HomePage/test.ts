import { signal, computed, effect } from '@preact/signals-react'

const count = signal(0)

console.log(count.value) // 0
count.value = 5 // уведомляет подписчиков

const double = computed(() => count.value * 2)

effect(() => {
  console.log(`Значение: ${count.value}, удвоенное: ${double.value}`)
})
