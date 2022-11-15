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

  const collapseToggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!collapseToggleRef.current)
      throw Error('collapseToggleRef is not assigned')

    activePanel
      ? collapseToggleRef.current.setAttribute('open', '')
      : collapseToggleRef.current.removeAttribute('open')
  }, [activePanel])

  const handlePanelClick = (id: string) => {
    setActivePanel(activePanel !== id ? id : null)
  }

  const value = {
    collapseToggleRef,
    activePanel,
    handlePanelClick,
    id,
  }

  return (
    <CollapseContext.Provider value={value}>
      <div className={styles.collapse} {...props}>
        {children}
      </div>
    </CollapseContext.Provider>
  )
}

export default Collapse
