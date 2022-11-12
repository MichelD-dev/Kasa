import {useAccordion} from '../../../context/AccordionContext'
import styles from '../accordion.module.scss'

export const AccordionToggle = ({children, ...props}: AccordionItemType) => {
  const {activePanel, handlePanelClick, id} = useAccordion()

  return (
    <button
      className={styles.toggle}
      onClick={() => handlePanelClick(id)}
      aria-expanded={!!activePanel}
      aria-controls={`panel-${id}`}
      id={`accordion-${id}`}
      {...props}
    >
      {children}
      <span className={styles.arrow}></span>
    </button>
  )
}
