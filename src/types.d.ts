interface LodgingType {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: {name: string; picture: string}
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}

interface BannerProps {
  bannerURL?: string
  punchline?: string
}

interface AccordionContextInterface {
  activePanel: string | null
  handlePanelClick: (id: string) => void
  id: string
}

interface AccordionType {
  defaultActivePanel?: string | null
  children: ReactNode
  collapsible?: boolean
  id: string
}

interface AccordionItemType {
  children: ReactNode
}
