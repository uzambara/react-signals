import { useSearchParams } from 'react-router'
import { QueryChangeModel } from '../../../../state'
import { useMemo } from 'react'

export const useQueryExampleState = () => {
  const searchParams = useSearchParams()

  return useMemo(
    () => ({
      searchQueryParam: new QueryChangeModel<string>(
        'default',
        'search',
        searchParams
      )
    }),
    [searchParams]
  )
}
