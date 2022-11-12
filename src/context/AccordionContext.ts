/* eslint-disable @typescript-eslint/no-empty-function */
import {createContext, useContext} from 'react'

export const AccordionContext = createContext<AccordionContextInterface>({
  activePanel: '',
  id: '',
  handlePanelClick: () => {},
})
AccordionContext.displayName = 'AccordionContext'

export function useAccordion() {
  const context = useContext(AccordionContext)

  if (context === undefined) {
    throw new Error('useAccordion must be used within a <Accordion />')
  }
  return context
}
