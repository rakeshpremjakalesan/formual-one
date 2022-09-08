import { Input, SearchLabel } from './GlobalFilter.styles'
interface GlobalFilterProps {
  filter?: any
  setFilter?: any
}

const GlobalFilter = ({
  filter,
  setFilter,
}: GlobalFilterProps): JSX.Element => {
  return (
    <div>
      <SearchLabel htmlFor="search">Search</SearchLabel>
      <Input
        id="search"
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Formula One Details"
      />
    </div>
  )
}

export default GlobalFilter
