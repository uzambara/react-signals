import type { SetURLSearchParams } from 'react-router'
import type { IChangeModel } from './abstractions.ts'

export class QueryChangeModel<TValue> implements IChangeModel<TValue> {
  private readonly _key: string
  private readonly _urlSearchParams: URLSearchParams
  private readonly _setUrlSearchParams: SetURLSearchParams
  private readonly _defaultValue: TValue

  constructor(
    defaultValue: TValue,
    key: string,
    search: [URLSearchParams, SetURLSearchParams]
  ) {
    this._key = key
    this._setUrlSearchParams = search[1]
    this._urlSearchParams = search[0]
    this._defaultValue = defaultValue
  }

  init = (value: TValue) => {
    if (!this._urlSearchParams.has(this._key)) {
      this.onChange(value)
    }
  }

  public get value() {
    return (
      (this._urlSearchParams.get(this._key) as TValue) ?? this._defaultValue
    )
  }
  public onChange(value: TValue): void {
    const newParams = new URLSearchParams(this._urlSearchParams)

    newParams.set(this._key, value as string)

    this._setUrlSearchParams(newParams, { replace: true })
  }
}
