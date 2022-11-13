import {useEffect, useRef, useState} from 'react'
import {CollapseContext} from '../../context/CollapseContext'
import styles from './collapse.module.scss'

const Collapse = ({
  defaultActivePanel = null,
  id,
  children,
  ...props
}: CollapseType) => {
  const [activePanel, setActivePanel] = useState(defaultActivePanel)

  const accordeonToggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!accordeonToggleRef.current)
      throw Error('accordeonToggleRef is not assigned')

    activePanel
      ? accordeonToggleRef.current.setAttribute('open', '')
      : accordeonToggleRef.current.removeAttribute('open')
  }, [activePanel])

  const handlePanelClick = (id: string): void => {
    setActivePanel(activePanel !== id ? id : null)
  }

  const value = {
    accordeonToggleRef,
    activePanel,
    handlePanelClick,
    id,
  }

  return (
    <CollapseContext.Provider value={value}>
      <div className={styles.accordion} {...props}>
        {children}
      </div>
    </CollapseContext.Provider>
  )
}

export default Collapse
