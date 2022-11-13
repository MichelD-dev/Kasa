import {useCollapse} from '../../../context/CollapseContext'
import styles from '../collapse.module.scss'

export const CollapsePanel = ({children, ...props}: CollapseItemType) => {
  const {activePanel, id} = useCollapse()

  return activePanel === id ? (
    <div
      className={styles.panel}
      {...props}
      id={`panel-${id}`}
      role="region"
      aria-labelledby={`accordion-${id}`}
    >
      {children}
    </div>
  ) : null
}
