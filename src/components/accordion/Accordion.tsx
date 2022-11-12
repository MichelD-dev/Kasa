import {useEffect, useState} from 'react'
import {AccordionContext} from '../../context/AccordionContext'
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
  }, [accordeonBtn, activePanel])

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

export default Accordion
