import {useCollapseContext} from '../../../context/CollapseContext'
import {CollapseItemType} from '../../../types'
import styles from '../collapse.module.scss'

export const CollapsePanel = ({children, ...props}: CollapseItemType) => {
  const {activePanel, id} = useCollapseContext()

  return activePanel === id ? (
    <div
      className={styles.panel}
      {...props}
      id={`panel-${id}`}
      role="region"
      aria-labelledby={`collapse-${id}`}
    >
      {children}
    </div>
  ) : null
}
