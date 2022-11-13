import {useCollapse} from '../../../context/CollapseContext'
import styles from '../collapse.module.scss'

export const CollapseToggle = ({children, ...props}: CollapseItemType) => {
  const {activePanel, handlePanelClick, id, accordeonToggleRef} = useCollapse()

  return (
    <button
      className={styles.toggle}
      onClick={() => handlePanelClick(id)}
      aria-expanded={!!activePanel}
      aria-controls={`panel-${id}`}
      id={`accordion-${id}`}
      ref={accordeonToggleRef}
      {...props}
    >
      {children}
      <span className={styles.arrow}></span>
    </button>
  )
}
