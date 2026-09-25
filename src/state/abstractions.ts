export interface IChangeModel<TValue> {
  get value(): TValue
  onChange: (value: TValue) => void
  init: (value: TValue) => void
}
