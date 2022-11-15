import {useCollapseContext} from '../../../context/CollapseContext'
import styles from '../collapse.module.scss'

export const CollapseToggle = ({children, ...props}: CollapseItemType) => {
  const {activePanel, handlePanelClick, id, collapseToggleRef} = useCollapseContext()

  return (
    <button
      className={styles.toggle}
      onClick={() => handlePanelClick(id)}
      aria-expanded={!!activePanel}
      aria-controls={`panel-${id}`}
      id={`collapse-${id}`}
      ref={collapseToggleRef}
      {...props}
    >
      {children}
      <span className={styles.arrow}></span>
    </button>
  )
}
