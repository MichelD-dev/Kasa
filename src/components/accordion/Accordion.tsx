import {useEffect, useRef, useState} from 'react'
import {AccordionContext} from '../../context/AccordionContext'
import styles from './accordion.module.scss'

const Accordion = ({
  defaultActivePanel = null,
  id,
  children,
  ...props
}: AccordionType) => {
  const [activePanel, setActivePanel] = useState(defaultActivePanel)

  const accordeonToggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    activePanel
      ? accordeonToggleRef.current?.setAttribute('open', '')
      : accordeonToggleRef.current?.removeAttribute('open')
  }, [activePanel])

  const handlePanelClick = (id: string) => {
    setActivePanel(activePanel !== id ? id : null)
  }

  const value = {
    accordeonToggleRef,
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
