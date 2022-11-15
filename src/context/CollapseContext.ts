/* eslint-disable @typescript-eslint/no-empty-function */
import {createContext, useContext} from 'react'

export const CollapseContext = createContext<CollapseContextInterface>({
  activePanel: '',
  id: '',
  handlePanelClick: () => {},
  collapseToggleRef: null,
})
CollapseContext.displayName = 'CollapseContext'

export function useCollapseContext() {
  const context = useContext(CollapseContext)

  if (context === undefined) {
    throw new Error('useCollapseContext must be used within a <Collapse />')
  }
  return context
}
