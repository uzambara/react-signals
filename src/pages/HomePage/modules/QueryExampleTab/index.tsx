import { useQueryExampleState } from './state.ts'
import { Input } from '../../../../components'

export const QueryExampleTab = () => {
  const { searchQueryParam } = useQueryExampleState()

  return (
    <div>
      <div>Search param is : {searchQueryParam.value}</div>
      <Input value={searchQueryParam} />
    </div>
  )
}
