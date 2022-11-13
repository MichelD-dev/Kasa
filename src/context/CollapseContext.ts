/* eslint-disable @typescript-eslint/no-empty-function */
import {createContext, useContext} from 'react'

export const CollapseContext = createContext<CollapseContextInterface>({
  activePanel: '',
  id: '',
  handlePanelClick: () => {},
  accordeonToggleRef: null,
})
CollapseContext.displayName = 'CollapseContext'

export function useCollapse() {
  const context = useContext(CollapseContext)

  if (context === undefined) {
    throw new Error('useCollapse must be used within a <Collapse />')
  }
  return context
}
