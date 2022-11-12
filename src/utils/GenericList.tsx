import {ReactNode} from 'react'

interface Props<T> {
  data: T[]
  className?: string
  renderItem: (item: T) => ReactNode
  keyExtractor?: (item: T) => string
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
const List = <T extends unknown>({
  data,
  className = '',
  renderItem,
  keyExtractor = () => '',
}: Props<T>) => {
  return (
    <ul className={className}>
      {data.map((item, id) => (
        <li
          key={keyExtractor(item) || `${item}-${id}`}
          className={`styles${item}`}
        >
          {renderItem(item)}
        </li>
      ))}
    </ul>
  )
}

export default List
