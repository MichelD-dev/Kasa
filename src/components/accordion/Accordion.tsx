import {useState} from 'react'
import {
  AccordionContext,
  useAccordion,
} from '../../context/AccordionContext'
import styles from './accordion.module.scss'

const Accordion = ({
  defaultActivePanel = null,
  id,
  collapsible = false,
  children,
  ...props
}: AccordionType) => {
  const [activePanel, setActivePanel] = useState(defaultActivePanel)

  const handlePanelClick = (id: string) => {
    let nextActivePanelId: string | null = id

    if (collapsible && nextActivePanelId === activePanel)
      nextActivePanelId = null

    setActivePanel(nextActivePanelId)
  }

  const value = {
    activePanel,
    handlePanelClick,
    id,
  }

  return (
    <AccordionContext.Provider value={value}>
      <div className={styles.accordion} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export const AccordionToggle = ({children, ...props}: AccordionItemType) => {
  const {activePanel, handlePanelClick, id} = useAccordion()
console.log(activePanel)
  return (
    <button
      className={styles.toggle}
      onClick={() => handlePanelClick(id)}
      {...props}
    >
      {children}
      {/* <span className={styles.arrow}></span> */}
      {
      // activePanel === id &&
      <span className={styles.arrow}></span>}
    </button>
  )
}

export const AccordionPanel = ({children, ...props}: AccordionItemType) => {
  const {activePanel, id} = useAccordion()

  return activePanel === id ? (
    <div className={styles.panel} {...props}>
      {children}
    </div>
  ) : null
}

export default Accordion
