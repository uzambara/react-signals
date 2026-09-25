import type { IChangeModel } from './abstractions.ts'
import { signal, type Signal } from '@preact/signals-react'

export class ChangeModel<TValue> implements IChangeModel<TValue> {
  private readonly _value: Signal<TValue>

  constructor(initialValue: TValue) {
    this._value = signal(initialValue)
  }

  public onChange = (value: TValue) => {
    this._value.value = value
  }

  public get value() {
    return this._value.value
  }

  init(value: TValue): void {
    console.log('init', value)
    this._value.value = value
  }
}
