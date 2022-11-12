import {useAccordion} from '../../../context/AccordionContext'
import styles from '../accordion.module.scss'

export const AccordionPanel = ({children, ...props}: AccordionItemType) => {
  const {activePanel, id} = useAccordion()

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
