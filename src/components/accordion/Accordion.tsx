import {useEffect, useState} from 'react'
import {AccordionContext, useAccordion} from '../../context/AccordionContext'
import styles from './accordion.module.scss'

const Accordion = ({
  defaultActivePanel = null,
  id,
  children,
  ...props
}: AccordionType) => {
  const [activePanel, setActivePanel] = useState(defaultActivePanel)

  const accordeonBtn = document.body.querySelector(`#accordion-${id}`)

  useEffect(() => {
    activePanel
      ? accordeonBtn?.setAttribute('open', '')
      : accordeonBtn?.removeAttribute('open')
  }, [activePanel])

  const handlePanelClick = (id: string) => {
    setActivePanel(activePanel !== id ? id : null)
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

export default Accordion
